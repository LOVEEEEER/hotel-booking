import React from "react";
import Counter from "../../common/Counter/Counter";

const BookingCounter = ({ value, ...rest }) => {
  return (
    <>
      <Counter label="Взрослых" name="adults" value={value.adults} {...rest} />
      <Counter label="Детей" name="kids" value={value.kids} {...rest} />
    </>
  );
};

export default BookingCounter;
