import React from "react";
import Counter from "../../common/Counter/Counter";

const BookingCounter = ({ value, ...rest }) => {
  return (
    <>
      <Counter
        minValue={1}
        maxValue={5}
        label="Взрослых"
        name="adults"
        value={value.adults}
        {...rest}
      />
      <Counter
        minValue={0}
        maxValue={5}
        label="Детей"
        name="kids"
        value={value.kids}
        {...rest}
      />
    </>
  );
};

export default BookingCounter;
