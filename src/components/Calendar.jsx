import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Root = styled.div`
  display: grid;
  grid-template-columns: 4fr 5fr;
`;

const Calendar = () => {
  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState(new Date());
  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <Button
      variant="contained"
      color="primary"
      className="example-custom-input"
      onClick={onClick}
      ref={ref}>
      {value ? value : 'start day'}
    </Button>
  ));
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  return (
    <Root>
      <div>
        {console.log(new Date('2021-05-22'))}
        <h1>CALENDAR</h1>
        <DatePicker
          dateFormat="yyyy-MM-dd"
          selected={startDate}
          showDisabledMonthNavigation
          minDate={new Date()}
          onChange={(date) => setStartDate(date)}
          customInput={<ExampleCustomInput />}
          filterDate={isWeekday}
          openToDate={startDate}
          showYearDropdown
          showMonthDropdown
          useShortMonthInDropdown
        />
      </div>
      <div>
        <h2>functional</h2>
        <div>1: minDate - 최소날짜</div>
        <div>2: maxDate - 최대날짜</div>
        <div>3: dataFormat - 날짜형식고정</div>
        <div>4: onChange - 날짜클릭시 date변경</div>
        <div>5: customInput - input css (now button)</div>
        <div>6: filterDate - day 0, 6 제외</div>
        <div>7: openToDate - 시작날짜</div>
        <div>8: selected - input 초기날짜</div>
      </div>
    </Root>
  );
};

export default Calendar;
