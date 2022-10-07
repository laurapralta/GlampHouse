import { Container } from 'react-bootstrap';
import styled from "./styles.module.scss";
import { CalendarDesktop } from './CalendarDesktop/calendarDesktop';
import { CalendarMobile } from './CalendarMobile/calendarMobile';


export const Calendar = ({ Controller, control, error, setFechasRenta }) => {
  return (
    <Container as="section" fluid className="p-0 py-3">
      <h2 className="fs-5 mt-3 ms-4 fw-bold mb-3">Fechas disponibles</h2>
      <Container fluid className={`${styled.container} p-0`}>
        <div className={styled.box_calendar}>
          <CalendarDesktop className={styled.border} Controller={Controller} control={control} error={error} setFechasRenta={setFechasRenta}/>
          <CalendarMobile className={styled.border} Controller={Controller} control={control} error={error} setFechasRenta={setFechasRenta}/>
          <p className={styled.error}>{error?.message}</p>
       </div>
      </Container>
    </Container>
  );
};
