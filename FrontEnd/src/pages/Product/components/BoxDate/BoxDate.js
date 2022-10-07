import { Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import styled from "./styles.module.scss";
import { Calendar } from './Calendar/calendar';

export const BoxDate = ({ id }) => {
  const location = useLocation();

  return (
    <Container fluid className="bg-white ">
      
      <Container fluid className="max-width-1180">
      <h2 className="ms-4 border-bottom border-dark border-1 fs-5 fw-bold mt-3 pt-3 pb-1 ">
        Fechas disponibles</h2>
      </Container>
      
      <Container fluid className={`${styled.container} p-0`}>
        <div className={styled.box_calendar}>
          <Calendar/>
        </div>
        <div className={styled.box_info}>
          <div>
            <p className="font-500 my-3">Selecciona tus fechas de viaje para obtener precios exactos.</p>
            <Link
              to={`/reservas/${id}`}
              state={{ from: location }}
              replace
            >
              <button className="font-500">Hacer Reserva</button>
            </Link>
          </div>
        </div>
      </Container>
    </Container>
  );
};
