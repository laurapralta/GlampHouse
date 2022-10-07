import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import es from 'date-fns/locale/es';
import styled from './styles.module.scss';


export function Calendar({ label, Controller, control }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [monthsShown, setMonthShow] = useState(2);

  const alterarfechas = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  useEffect(() => {
  }, [monthsShown]);

  window.addEventListener("resize", (e) => {
    if ((e.currentTarget.innerWidth < 581) && (monthsShown === 2)) {
      setMonthShow(1);
    }

    if ((e.currentTarget.innerWidth > 580) && (monthsShown === 1)) {
      setMonthShow(2)
    }
  });

  return (
    <Controller
      control={control}
      name="fechas"
      render={({ field: {onChange,ref,name} }) => (
        
        <DatePicker
          className={`${styled.height} w-100 rounded px-2`}
          inputRef={ref}
          startDate={startDate}
          endDate={endDate}
          monthsShown={monthsShown}
          minDate={new Date()}
          locale={es}
          onChange={(dates) => {
            onChange(dates);
            alterarfechas(dates);
          }}
          placeholderText="Llegada - Salida"
          dateFormat="yyyy-MM-dd"
          formatWeekDay={nameOfDay => nameOfDay.substring(0, 1)}
          dateFormatCalendar="LLLL"
          selectsRange
          disabledKeyboardNavigation
        />
      )}
    />
  );
}