import { Button, Spinner } from "react-bootstrap";
import { MdLocationPin } from 'react-icons/md';
import styled from './styles.module.scss';


export function CardProduct({ data, FechasRenta, isLoading }) {
  let fechaDeReserva = null;
  let fechaDeRegreso = null;

  if(FechasRenta) {

    if(FechasRenta[0]) {
      const data = new Date(FechasRenta[0]);
      const dateFormated = new Intl.DateTimeFormat("es").format(data);
      fechaDeReserva = String(dateFormated);
    }

    if(FechasRenta[1]) {
      const data = new Date(FechasRenta[1]);
      const dateFormated = new Intl.DateTimeFormat("es").format(data);
      fechaDeRegreso = String(dateFormated);
    }
  }

  return (
    <div className={`${styled.card} w-100 rounded d-flex flex-column`}>
      <div className={`${styled.box_title} d-flex align-items-center ps-3`}>
        <h2 className="fs-5 fw-bold ms-4 d-flex align-items-center m-0">Detalle de reserva</h2>
      </div>
      <div className={styled.container_details}>
        <div className={styled.box_image}>
          <img src={data.images[0].urlImage} alt="Alojamiento"/>
        </div>
      
        <div className={styled.box_details}>
          <div className="d-flex ms-2 align-items-center">
            <p>{data.category.title}</p>
            <h3 className="d-block ms-3 fs-4">{data.Nombre}</h3>
          </div>
          <div className="d-flex align-items-center">
            <MdLocationPin/>
            <span>{data.city.name}</span>
          </div>
          <div className={`${styled.box_fechas} ${styled.border} mt-4`}>
            <small>Llegada</small>
            <span>{fechaDeReserva ? fechaDeReserva : "dd/mm/aaaa"}</span>
          </div>
          <div className={`${styled.box_fechas} ${styled.border_bottom}`}>
            <small>Salida</small>
            <span>{fechaDeRegreso ? fechaDeRegreso : "dd/mm/aaaa"}</span>
          </div>
          <div className={styled.box_button}>
            <Button className="w-100 mt-5 text-white" type="submit">
            {isLoading ? <Spinner animation="grow" size="sm" /> : "Confirmar Reserva"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}