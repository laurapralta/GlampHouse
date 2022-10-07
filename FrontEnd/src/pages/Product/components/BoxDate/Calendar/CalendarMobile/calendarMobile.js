import DatePicker from 'react-datepicker';
import es from 'date-fns/locale/es';

import styled from './styles.module.scss';

export function CalendarMobile({onChange, startDate, endDate}) {
  return (
    <div className={styled.container}>
      <DatePicker
        calendarClassName={styled.calendar}
        startDate={startDate}
        endDate={endDate}
        monthsShown={1}
        minDate={new Date()}
        locale={es}
        onChange={onChange}
        formatWeekDay={nameOfDay => nameOfDay.substring(0,1)} 
        dateFormatCalendar="LLLL"
        selectsRange
        inline
        disabledKeyboardNavigation // evitar que la fecha seleccionada se seleccione en otros meses
        // shouldCloseOnSelect={false} evitó que el calendario se cerrara cuando se seleccionan fechas
      />
    </div>
  );
}