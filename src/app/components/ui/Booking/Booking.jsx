import React, { useEffect, useState, useCallback } from "react";
import { validatorConfig } from "./validatorConfig";
import { validator } from "../../../utils/validator";
import DatePickForm from "../DatePickForm";
import Button from "../../common/Button";

const Booking = () => {
  const [errors, setErrors] = useState({});
  const [bookingFields, setBookingFields] = useState({
    entry: "",
    departure: "",
  });
  const isValid = Object.keys(errors).length === 0;

  const validate = useCallback(() => {
    const errors = validator(bookingFields, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }, [bookingFields]);

  useEffect(() => {
    if (!isValid) {
      validate();
    }
  }, [bookingFields, validate, isValid]);
  const handleChange = ({ target: { name, value } }) => {
    setBookingFields((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log(bookingFields);
  };
  return (
    <form onSubmit={handleSubmit}>
      <DatePickForm
        onChange={handleChange}
        data={bookingFields}
        errors={errors}
      />
      <Button
        type="submit"
        label="Забронировать"
        variant="contained"
        sx={{ width: "100%" }}
      />
    </form>
  );
};

export default Booking;
