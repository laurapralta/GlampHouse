import { useState } from 'react';
import { CalendarDesktop } from './CalendarDesktop/calendarDesktop';
import { CalendarMobile } from './CalendarMobile/calendarMobile';

export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <>
      <CalendarDesktop onChange={onChange} startDate={startDate} endDate={endDate}/>
      <CalendarMobile onChange={onChange} startDate={startDate} endDate={endDate}/>
    </>
  )
};
