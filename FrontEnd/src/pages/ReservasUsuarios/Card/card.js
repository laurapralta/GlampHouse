import styled from './styles.module.scss';
import { Link, useLocation } from "react-router-dom";
import { MdLocationPin } from 'react-icons/md';
import * as dayjs from 'dayjs';


export function Card({ data }) {
  const location = useLocation();
  console.log("dataReserva", data);

  const reservationStarParse = dayjs(data.reservationStart).format("YYYY-MM-DD")
  const reservationEndParse = dayjs(data.reservationEnd).format("YYYY-MM-DD")

  return (
      <div className={`${styled.card} w-100 rounded bg-light`}>
        <div className={`${styled.box_image} d-flex align-items-top justify-content-center p-2`}>
          <Link to={`/producto/${data.product.id}`}> 
          <img src={data.product.images[0]?.urlImage} alt=""/>
          </Link>
        </div>

        <div className={`${styled.info} d-flex flex-column p-2`}>
          <header className="d-flex">
              <strong className=" fs-6">{data.product.name}</strong>
          </header>
          <div className="d-flex flex-wrap px-0 align-items-center py-1 my-0 my-1">
            <MdLocationPin size={20} color="#31363F" />
            <span className="fs-14 d-inline align-items-center text-secondary">{data.product.city.name} - </span>
          </div>

          <span className="fs-14 d-inline align-items-center text-secondary">


            Llegada: {reservationStarParse}
          </span>
          <span className="fs-14 d-inline align-items-center text-secondary">
            Salida: {reservationEndParse}
          </span>

          <div className="flex-grow-1 d-flex align-items-center mt-3">
            <p className={`fs-14 d-block mb-2 ${styled.description}`}>{data.product.description.substr(0, 100)}</p>
          </div>

        </div>
      </div>


  );

}
