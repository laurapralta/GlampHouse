import React, { useEffect, useState } from 'react';
import styled from './styles.module.scss';
import { HeaderInfo } from './components/HeaderInfo/HeaderInfo';
import { Politicas } from '../Product/components/Politicas/Politicas';
import { CardProduct } from './components/CardProduct/cardProduct';
import { FormRegistro } from './components/FormRegistro/formRegistro';
import { ArrivalTime } from './components/ArrivalTime/arrivalTime';
import { Calendar } from './components/Calendar/calendar'
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSession } from '../../hooks/useSession';
import { Loading } from '../../components/Loading/loading';
import { Message } from '../../components/Message/message';
import { useMutation, useQueryClient } from 'react-query';
import { MessageError } from '../../components/MessageError/messageError';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import * as dayjs from 'dayjs'




export function Reservas() {
  const [message, setMessage] = useState(false);
  const [product, setProduct] = useState(null);
  const [FechasRenta, setFechasRenta] = useState(null);
  const [statusMessageError, setStatusMessageError] = useState(false);
  
  useEffect( () => {
    dayjs.extend(customParseFormat);
  }, []

  )

  const queryClient = useQueryClient();

  const { session } = useSession();
  const { id: idProduct } = useParams();

  const schema = yup.object({
    reservationTime: yup.string().required("Selecciona un horario"),
    fechas: yup.array().required("Selecciona las fechas de renta del alojamiento"),
  });

  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    api.get(`/products/${idProduct}`).then(response => setProduct(response.data));
  }, [idProduct]);

  

  const { mutateAsync, isLoading } = useMutation(async (data) => {
    console.log("dataReserva", data);
    const newData = {
      ...data,
      user: data.User,
      reservationStart:dayjs(data.reservationStart).format("YYYY-MM-DD"), 
      reservationEnd:dayjs(data.reservationEnd).format("YYYY-MM-DD")
    }
    console.log(newData);
    const response = await api.post("/reservation/create/", newData, {
      headers: {
        Authorization: `Bearer ${session.jwt}`,
      }
    });

    return response.data;
  }, {
    onSuccess: () => {
      setMessage(true);
      queryClient.invalidateQueries(`misReservas-${session.user.id}`);
    },
    onError: () => {
      setStatusMessageError(true);
    }
  });

  async function dataForm(data) {
    console.log(data);
    const reserva = {
      reservationTime: data.reservationTime,
      reservationStart: data.fechas[0],
      reservationEnd: data.fechas[1],
      product: {
        id: Number(idProduct)
      },
      User: {
        id: session.user.id
      }
    }
    await mutateAsync(reserva);
  }

  if(!product) {
    return <Loading/>
  }

  return (
    <>
      <HeaderInfo name={product.name} category={product.category.title}/>
      <form className='px-2 py-4' onSubmit={handleSubmit(dataForm)}>
        <div className={styled.container}>
          <div className={styled.containerInfo}>
            <FormRegistro />
            <Calendar Controller={Controller} control={control} error={errors?.fechas} setFechasRenta={setFechasRenta}/>
            <ArrivalTime register={register} error={errors?.reservationEnd}/>
          </div>
          <div className={styled.containerReserva}>
            <CardProduct data={product} FechasRenta={FechasRenta} isLoading={isLoading}/>
          </div>
        </div>
      </form>

      
      <Message
        status={message}
        setStatus={setMessage}
        link="/"
        message="Tu reserva fue realizada con exito!"
        textButton="Ok"
      />

      <MessageError
        message="Ocurrio un error al realizar tu reserva. Intentalo mas tarde!"
        setStatus={setStatusMessageError}
        status={statusMessageError}
        textButton="Ok"
      />
    </>
  );
}
