import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import es from 'date-fns/locale/es';
import styled from "./styles.module.scss";



export const CalendarDesktop = ({ Controller, control, setFechasRenta }) => {

  return (
    <div className={styled.container}>
      <Controller
        control={control}
        className="d-flex flex-column"
        name="fechas"
        render={({ field: { onChange, value, name, ref } }) => (
          <>
          <DatePicker
            renderCustomHeader={({
              monthDate,
              customHeaderCount,
              decreaseMonth,
              increaseMonth,
            }) => (
              <div>
                <button
                  aria-label="Previous Month"
                  className={
                    "details_previous react-datepicker__navigation react-datepicker__navigation--previous"
                  }
                  style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
                  onClick={decreaseMonth}
                >
                  <MdOutlineArrowBackIosNew size={16} color="#ffffff"/>
                </button>
                <span className="react-datepicker__current-month">
                  {monthDate.toLocaleString("es", {
                    month: "long",
                  })}
                </span>
                <button
                  aria-label="Next Month"
                  className={
                    "details_next react-datepicker__navigation react-datepicker__navigation--next"
                  }
                  style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
                  onClick={increaseMonth}
                >
                <MdOutlineArrowForwardIos size={16} color="#ffffff"/>
                </button>
              </div>
            )}
            calendarClassName={styled.calendar}
            startDate={value && value[0]}
            endDate={value && value[1]}
            locale={es}
            monthsShown={2}
            minDate={new Date()}
            onChange={data => {
              onChange(data)
              setFechasRenta(data)
            }}
            formatWeekDay={nameOfDay => nameOfDay.substring(0,1)}
            dateFormat="yyyy/MM/dd"
            disabledKeyboardNavigation
            shouldCloseOnSelect={false}
            selectsRange
            inline
          />
          </>
        )}
      />
    </div>
  );
};
