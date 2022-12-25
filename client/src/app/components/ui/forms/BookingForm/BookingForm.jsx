import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "../../../../hooks/useForm";
import {
    getDaysCountFromTimeStamp,
    getPresenceBookingDate
} from "../../../../utils/dateService";
import Counter from "../../../common/Counter";
import DatePicker from "../../../common/form/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../common/Button";
import { getBookingError, reserveRoom } from "../../../../store/slices/booking";
import { validatorConfig } from "./validatorConfig";
import "./scss/booking-form.scss";

const BookingForm = ({ _id, price: dayPrice, onOpenDialog }) => {
    const dispatch = useDispatch();
    const bookingServerError = useSelector(getBookingError());
    const [bookingError, setBookingError] = useState();
    const { data, errors, handleChange, validateBySubmit } = useForm(
        {
            entry: getPresenceBookingDate(1),
            departure: getPresenceBookingDate(2),
            adults: 1,
            kids: 0
        },
        validatorConfig
    );
    const getRoomPrice = () => {
        if (data.entry && data.departure) {
            const daysCount = getDaysCountFromTimeStamp(
                data.departure.getTime() - data.entry.getTime()
            );
            const guestsCount = data.adults + data.kids;
            return daysCount * guestsCount * dayPrice;
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateBySubmit();
        if (isValid) {
            const currentBookingEntry = new Date(data.entry).getTime();
            const currentBookingDeparture = new Date(data.departure).getTime();
            const isCorrectFormat =
                currentBookingEntry < currentBookingDeparture ||
                currentBookingEntry === currentBookingDeparture;

            if (new Date(data.entry).getTime() < Date.now()) {
                setBookingError("Нельзя забронировать номер в прошлом");
                return;
            }
            if (!isCorrectFormat) {
                setBookingError("Отъезд не может быть позже или равен выезду");
                return;
            }
            const bookingRoom = {
                roomId: _id,
                fullPrice: getRoomPrice(data),
                ...data
            };

            dispatch(reserveRoom(bookingRoom, onOpenDialog));
        }
    };
    const isValid = Object.keys(errors).length === 0;
    return (
        <form className="room-booking__form" onSubmit={handleSubmit}>
            <div className="room-booking__form-fields">
                <div className="room-booking__form-input">
                    <DatePicker
                        sx={{ width: "100%" }}
                        label="Заезд"
                        name="entry"
                        value={data.entry}
                        errorMessage={errors.entry}
                        onChange={handleChange}
                    />
                </div>
                <div className="room-booking__form-input">
                    <DatePicker
                        sx={{ width: "100%" }}
                        label="Заезд"
                        name="departure"
                        value={data.departure}
                        errorMessage={errors.departure}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div style={{ marginBottom: "20px" }}>
                <Counter
                    minValue={1}
                    maxValue={5}
                    label="Взрослых"
                    name="adults"
                    value={data.adults}
                    onChange={handleChange}
                />
                <Counter
                    minValue={0}
                    maxValue={5}
                    label="Детей"
                    name="kids"
                    value={data.kids}
                    onChange={handleChange}
                />
            </div>
            <div className="room-booking__submit-block">
                {isValid && (
                    <h3 className="room-booking__price">
                        Итого: {getRoomPrice(data)}₽
                    </h3>
                )}
                <Button
                    type="submit"
                    color="secondary"
                    variant="outlined"
                    sx={{ width: "250px" }}
                >
                    Забронировать
                </Button>
                <br />
                {bookingError || bookingServerError ? (
                    <span className="room-booking__error">
                        {bookingError || bookingServerError}
                    </span>
                ) : null}
            </div>
        </form>
    );
};

BookingForm.propTypes = {
    _id: PropTypes.string.isRequired,
    onOpenDialog: PropTypes.func.isRequired,
    price: PropTypes.number.isRequired
};

export default BookingForm;
