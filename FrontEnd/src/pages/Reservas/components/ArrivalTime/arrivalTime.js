import styled from './styles.module.scss';
import { Container } from 'react-bootstrap';
import { AiOutlineCheckCircle } from 'react-icons/ai';



export function ArrivalTime({register, error}) {
  return (
    <>
      <Container fluid className="p-0">
        <Container fluid className="p-0">

          <h2 className="fs-5 p-0 m-0 ms-4 mb-2 d-block fw-bold px-1">Horario de llegada</h2>
          <div className={styled.container}>
            <div className="d-flex align-items-center">
              <AiOutlineCheckCircle size={20} color="#31363F" />
              <span className="fs-14 d-inline ms-2">Horario de salida: 10:00 a 14:00 horas</span>
            </div>
            
            <div className="mt-2">
              <p className="fs-14 align-items-center m-0 p-0 mb-1">Indique su hora estimada de llegada</p>
              <select 
                className={`${styled.box} p-0 m-0 ${error && styled.border}`}
                {...register("reservationTime")}
              >
                <option className="p-0 m-0 mb-2 d-block w-100 font-400 px-1"  disabled selected>Selecione su horario de llegada...</option>
                <option value="10:00">10:00 AM</option>
                <option value="10:30">10:30 AM</option>
                <option value="11:30">11:30 AM</option>
                <option value="12:00">12:00 AM</option>
                <option value="12:30">12:30 PM</option>
                <option value="13:30">13:30 PM</option>
                <option value="14:00">14:00 PM</option>
              </select>
            </div>
            
            <p className='fs-14 text-danger'>{error?.message}</p>
          </div>
        </Container>
      </Container>
    </>
  )
}
