/* eslint-disable react/prop-types */
import { DateRange } from "react-date-range";

const Calender = ({ value, handleChangeDate }) => {
  // console.log(value);
  return (
    <DateRange
      ranges={[value]}
      onChange={handleChangeDate}
      rangeColors={["#F43F5E"]}
      direction="vertical"
      showDateDisplay={false}
    />
  );
};

export default Calender;
