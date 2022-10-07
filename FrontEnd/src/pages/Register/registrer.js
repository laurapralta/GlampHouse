import { Link } from "react-router-dom";
import { useState } from 'react';
import { Button, Container, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Form } from 'react-bootstrap';
import * as yup from 'yup';
import { api } from '../../services/api'; //*********************************** */
import { Input } from '../../components/Input/input';
import { InputPassword } from '../../components/InputPassword/inputPassword';
import { BoxForm } from "../../components/Form/form";
import styled from './styles.module.scss';
import { useMutation } from "react-query";
import { Message } from "../../components/Message/message";



export function Register() {
  const [message, setMessage] = useState(false);
  const [error, setError] =  useState();

  const schema = yup.object({
    name: yup.string().required("Campo obligatorio."),
    lastName: yup.string().required("Campo obligatorio."),
    email: yup.string().email("Digita um e-mail válido.").required("Campo obligatorio."),
    password: yup.string().min(6, "Debes usar mínimo 6 dígitos.").required("Campo obligatorio."),
    password_confirmation: yup.string().oneOf([
      null, yup.ref("password")
    ], "Las contraseñas deben ser iguales.")
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const { mutateAsync, isLoading } = useMutation(async (data) => {

    console.log(data);
    const response = await api.post("users/register", data);
    return response.data;
  }, {
    onSuccess: () => {
      setMessage(true);
    },
    onError: () => {
      setError("No fue posible realizar el registro, intenta más tarde.");
    }
  });

  async function dataForm(data) {
    const user = {
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    }
    await mutateAsync(user);
  }

  return (
    <>
    <Container
      className="d-flex flex-grow-1 justify-content-center align-items-center"
    >
      <BoxForm handleSubmit={handleSubmit} dataForm={dataForm}>
        <Form.Text
          as="p"
          className={"d-block text-primary text-center fs-3 fw-bold mb-4"}
        >
          Crear cuenta
        </Form.Text>
        {error && <p className={styled.error_request}>{error}</p>}
        <div className={styled.responsive}>
          <Input type="text" name="name" label="Nombre" error={errors?.name} register={register}/>
          <Input type="text" name="lastName" label="Apellido" error={errors?.lastName} register={register}/>
        </div>
        <Input type="text" name="email" label="E-mail" error={errors?.email} register={register}/>
        <InputPassword name="password" label="Contraseña" error={errors?.password} register={register}/>
        <Input type="password" name="password_confirmation" label="Confirmar contraseña" error={errors?.password_confirmation} register={register}/>

        <Button className="w-100 text-white fw-bold mt-4" variant="primary" type="submit">
          {isLoading ? <Spinner animation="grow" size="sm" /> : "Crear cuenta"}
        </Button>
        <Form.Text className="text-center d-block text-secondary mt-3">
          ¿Ya tienes una cuenta?
          <Link className="text-decoration-none font-500 text-primary" to="/login"> Iniciar sesión</Link>
        </Form.Text>
      </BoxForm>
    </Container>
    <Message
      status={message}
      setStatus={setMessage}
      link="/login"
      message="¡Tu registro fue realizado con éxito!"
      textButton="Ok"
    />
    </>
  )
}

