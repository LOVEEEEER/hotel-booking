import React, { useEffect, useState, useCallback } from "react";
import { validatorConfig } from "./validatorConfig";
import { validator } from "../../../../utils/validator";
import DatePickForm from "../../forms/DatePickForm";
import Button from "../../../common/Button";
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
    const entryDate = entryNewDate.getDate() + 1;
    const entryMonth = entryNewDate.getMonth();
    const entryFullYear = entryNewDate.getFullYear();
    const correctEntryDate = `${entryDate < 10 ? `0${entryDate}` : entryDate}.${
      entryMonth < 10 ? `0${entryMonth + 1}` : entryMonth + 1
    }.${entryFullYear}`;
    const departureNewDate = new Date(entryFullYear, entryMonth, entryDate + 7);
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
    const newDateEntry = new Date(
      Number(bookingFields.entry.slice(6, 11)),
      Number(bookingFields.entry.slice(3, 5)) - 1,
      Number(bookingFields.entry.slice(0, 2))
    );
    const newDateDeparture = new Date(
      Number(bookingFields.departure.slice(6, 11)),
      Number(bookingFields.departure.slice(3, 5)) - 1,
      Number(bookingFields.departure.slice(0, 2))
    );
    const numberOfDaysInHotel =
      (newDateDeparture.getTime() - newDateEntry.getTime()) /
      1000 /
      60 /
      60 /
      24;
    if (numberOfDaysInHotel < 0) return "";
    const fullRoomPrice =
      tenantCount *
      roomPrice *
      (numberOfDaysInHotel === 0 ? 1 : numberOfDaysInHotel);
    return fullRoomPrice;
  };

  const handleChange = (target) => {
    setBookingFields((prevState) => ({ ...prevState, ...target }));
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
