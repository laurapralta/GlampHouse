import DatePicker from 'react-datepicker';
import es from 'date-fns/locale/es';
import styled from "./styles.module.scss";



export const CalendarMobile = ({ Controller, control, setFechasRenta }) => {
 
  return (
    <div className={styled.container}>
      <Controller
        control={control}
        name="fechas"
        className="d-flex flex-column"
        render={({ field: { onChange, value, name, ref } }) => (
          <DatePicker
            calendarClassName={styled.calendar_mobile}
            startDate={value && value[0]}
            endDate={value && value[1]}
            monthsShown={1}
            minDate={new Date()}
            locale={es}
            onChange={data => {
              onChange(data)
              setFechasRenta(data)
            }}
            formatWeekDay={nameOfDay => nameOfDay.substring(0,1)}
            dateFormatCalendar="LLLL"
            selectsRange
            inline
            disabledKeyboardNavigation // evitar que la fecha seleccionada se seleccione en otros meses
            // shouldCloseOnSelect={false} evitar que el calendario se cierre cuando se seleccionan las fechas
          />
        )}
      />
    </div>
  );
};


