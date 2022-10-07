import { Container, Button, Spinner } from 'react-bootstrap';
import { GlampInfo } from './GlampInfo/glampInfo';
import { Attibutes } from './Attributes/attributes';
import { Images } from './Images/images';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import styled from './styles.module.scss';
import { ProductPolicies } from './ProductPolicies/producPolicies';
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import { useSession } from '../../hooks/useSession';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../services/api';
import { useMutation, useQueryClient } from 'react-query';
import { Message } from '../../components/Message/message';
import { MessageError } from '../../components/MessageError/messageError';



export function Admin() {
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState(false);
  const [statusMessageError, setStatusMessageError] = useState(false);
  const { session } = useSession();
  const queryClient = useQueryClient();


  const schema = yup.object({
    name: yup.string().required("Por favor ingrese un nombre."),
    category: yup.string().required("Por favor seleccione una categoría."),
    latitude: yup.number().typeError("Por favor ingrese datos numéricos."),
    longitude: yup.number().typeError("Por favor ingrese datos numéricos."),
    features: yup.array().required("Por favor seleccione uno o más atributos."),
    description: yup.string().required("Por favor ingrese una descripción ."),
    city: yup.string().required("Por favor seleccione una ciudad"),
    rules: yup.string().required("Campo obligatorio."),
    cancellation: yup.string().required("Campo obligatorio."),
    security: yup.string().required("Campo obligatorio."),
  });

  const { handleSubmit, register, formState: { errors }, control, setValue } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const { mutateAsync, isLoading } = useMutation(async (data) => {
  console.log("dataproduct", data);

    const response = await api.post("/products", data, {
      headers: {
        Authorization: `Bearer ${session.jwt}`,
      }
    });
    return response.data;
  }, {
    onSuccess: (data2) => {
      setValue("name", "");
      setValue("description", "");
      setValue("latitude", "");
      setValue("longitude", "");
      setValue("rules", "");
      setValue("cancellation", "");
      setValue("security", "");
      setImages([]);
      //setAttributes([]);
      setStatus(true);
      queryClient.invalidateQueries('policies');
      queryClient.invalidateQueries('cityFilter');
      queryClient.invalidateQueries('categoryFilter');
    },
    onError: () => {
      setStatusMessageError(true);
    }
  });

  async function handleSubmitForm(data) {
/*declarar una constante data.features.map y dentro del map retornar un objeto nuevo 
y id:data.featuress.map((el)=>({id: el.id))*/
   console.log("data", data);
    
    const newProduct = {
      name: data.name,
      description: data.description,
      latitude:data.latitude,
      longitude:data.longitude,
      images: images,
      category: {  id: Number(data.category) },
      city: { id: Number(data.city) },
      rules: data.rules,
      security: data.security,
      cancellation: data.cancellation,
      features: data.features.map((el)=>({id: el}))
    }
   console.log("newProduct", newProduct);
    await mutateAsync(newProduct);
  }

  return (
    <>
      <Container fluid className="bg-white py-2">
      <Container fluid className="max-width-1180 p-0 d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column text-white">
          <strong className={styled.texto}>Administracion</strong>
        </div>
      </Container>
      <Link to="/">
          <button className="d-flex justify-content-end">
            <IoIosArrowBack className="d-block" color="#ffffff" size={25}/>
          </button>
        </Link>
    </Container>
    
      <Container as="section" fluid className={`${styled.red} m-0 mb-5`}>
        <Container fluid className={`pb-2 pt-4 d-flex  max-width-1180`}>
          <h2 className={styled.texto2}>Crear alojamiento</h2>
        </Container>


        <Container fluid className={`py-3 m-0 mx-auto max-width-1180 rounded ${styled.container}`}>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <GlampInfo Controller={Controller} control={control} register={register} errors={errors}/>
            <ProductPolicies register={register} errors={errors}/>
            <Images images={images} setImages={setImages}/>

            <div className='d-flex justify-content-center align-items-center mt-5 mb-3'>
              <Button type='submit' className={`w-100 ${styled.max_width} text-white font-600`}>
              {isLoading? <Spinner animation="grow" size="sm" /> : "Crear alojamiento"}
              </Button>
            </div>

          </form>
        </Container>
      </Container>

      <Message
        status={status}
        setStatus={setStatus}
        message="Alojamiento registrado con exito!" textButton="Ok"
      />

      <MessageError
        message="Hubo un error al registrar el alojamiento, intente nuevamente mÃ¡s tarde!"
        setStatus={setStatusMessageError}
        status={statusMessageError}
        textButton="Ok"
      />
    </>
  )
}
