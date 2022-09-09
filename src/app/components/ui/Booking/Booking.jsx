import React, { useEffect, useState, useCallback } from "react";
import { validatorConfig } from "./validatorConfig";
import { validator } from "../../../utils/validator";
import DatePickForm from "../DatePickForm";
import Button from "../../common/Button";
import BookingCounter from "../BookingCounter";

const Booking = ({ roomPrice }) => {
  const [errors, setErrors] = useState({});
  const [counters, setCounters] = useState({
    adults: 1,
    kids: 0,
  });
  const [bookingFields, setBookingFields] = useState({
    entry: "",
    departure: "",
  });
  const isValid = Object.keys(errors).length === 0;

  useEffect(() => {
    const entryNewDate = new Date();
    const entryDate = entryNewDate.getDate();
    const entryMonth = entryNewDate.getMonth();
    const entryFullYear = entryNewDate.getFullYear();
    const correctEntryDate = `${entryDate < 10 ? `0${entryDate}` : entryDate}.${
      entryMonth < 10 ? `0${entryMonth + 1}` : entryMonth + 1
    }.${entryFullYear}`;
    const departureNewDate = new Date(entryFullYear, entryMonth, entryDate + 5);
    const departureDate = departureNewDate.getDate();
    const departureMonth = departureNewDate.getMonth();
    const departureFullYear = departureNewDate.getFullYear();
    const correctDepartureDate = `${
      departureDate < 10 ? `0${departureDate}` : departureDate
    }.${
      departureMonth < 10 ? `0${departureMonth + 1}` : departureMonth + 1
    }.${departureFullYear}`;
    setBookingFields({
      entry: correctEntryDate,
      departure: correctDepartureDate,
    });
  }, []);

  const validate = useCallback(() => {
    const errors = validator(bookingFields, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }, [bookingFields]);

  const handleToggleCounter = (name, value) => {
    setCounters((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    validate();
  }, [bookingFields, validate]);

  const getFullRoomPrice = () => {
    let tenantCount = 0;
    Object.keys(counters).forEach((item) => (tenantCount += counters[item]));
    const fullRoomPrice = tenantCount * roomPrice;
    return fullRoomPrice;
  };

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
      <div className="booking-counter-wrapper">
        <BookingCounter
          onToggleCounter={handleToggleCounter}
          value={counters}
        />
      </div>
      <hr />
      <h3 className="room-info__full-price">Итого: {getFullRoomPrice()}₽</h3>
      <Button
        type="submit"
        label="Забронировать"
        variant="outlined"
        sx={{ width: "100%" }}
      />
    </form>
  );
};

export default Booking;
