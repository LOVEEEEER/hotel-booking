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

  const handleChange = (e) => {
    const {
      nativeEvent: { data: lastOne },
      target: { name, value },
    } = e;
    if (!Number.isNaN(Number(lastOne))) {
      setBookingFields((prevState) => ({
        ...prevState,
        [name]:
          (value.length === 2 || value.length === 5) &&
          value.length > prevState[name].length
            ? `${value}.`
            : value,
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
  };
  return (
    <form className="room-booking__form" onSubmit={handleSubmit}>
      <DatePickForm
        onChange={handleChange}
        data={bookingFields}
        errors={errors}
      />
      <div className="room-booking__counters">
        <BookingCounter
          value={counters}
          onToggleCounter={handleToggleCounter}
        />
      </div>
      <div className="room-booking__submit-block">
        <h3 className="room-booking__price">Итого: {getFullRoomPrice()}₽</h3>
        <Button
          type="submit"
          color="secondary"
          variant="outlined"
          sx={{ width: "250px" }}
        >
          Забронировать
        </Button>
      </div>
    </form>
  );
};

export default Booking;
