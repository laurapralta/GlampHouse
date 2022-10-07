import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Container, Spinner, Alert } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Form } from 'react-bootstrap';
import * as yup from 'yup';
import { Input } from '../../components/Input/input';
import { InputPassword } from '../../components/InputPassword/inputPassword';
import { BoxForm } from "../../components/Form/form";
import { useMutation } from "react-query";
import { api } from '../../services/api'; 
import { useSession } from "../../hooks/useSession";


export function Login() {
  const { createSession } = useSession();
  const location = useLocation();
  const navigate = useNavigate();

  const schema = yup.object({
    email: yup.string().email("Digita un e-mail valido").required("Campo obligatorio."),
    password: yup.string().min(6, "Debes usar mínimo 6 dígitos").required("Campo obligatorio.")
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const { mutateAsync, isError, isLoading } = useMutation(async (data) => {
    const response = await api.post("/users/login/", data);
    return response.data;
  }, {
    onSuccess: (user) => {
      createSession(user);
      if(location.state) {
        navigate(location.state.from.pathname);
      }
    }
  });

  async function dataForm(data) {
    await mutateAsync(data);
  }

  return (
    <Container
      className="d-flex flex-grow-1 justify-content-center align-items-center">
      <BoxForm handleSubmit={handleSubmit} dataForm={dataForm}>
        <Form.Text
          as="p"
          className={"d-block text-primary text-center fs-3 fw-bold mb-4"}
        >
          Iniciar sesión
        </Form.Text>
        {location.state?.message && (
          <Alert variant="danger" className="py-2 text-center">
            {location.state?.message}
          </Alert>
        )}
        {isError && (
          <Alert variant="danger" className="py-2 text-center">
            e-mail o contraseña inválidos.
          </Alert>
        )}
        <Input type="text" name="email" label="E-mail" error={errors?.email} register={register}/>
        <InputPassword name="password" label="password" error={errors?.password} register={register}/>

        <Button
          className="w-100 text-white fw-bold mt-4 text-secondary"
          variant="primary"
          type="submit"
          disabled={isLoading ? true : false}
        >
          {isLoading ? <Spinner animation="grow" size="sm" /> : "Entrar"}
        </Button>
        <Form.Text className="text-center d-block text-secondary mt-3">
          ¿Aún no tienes una cuenta?
          <Link className="text-decoration-none font-500 text-primary" to="/register"> Regístrate</Link>
        </Form.Text>
      </BoxForm>
    </Container>
  )
}
