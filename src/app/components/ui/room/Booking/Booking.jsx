import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { validatorConfig } from "./validatorConfig";
import DatePickForm from "../../forms/DatePickForm";
import Button from "../../../common/Button";
import BookingCounter from "../BookingCounter";
import { useForm } from "../../../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { reserveRoom } from "../../../../store/booking";
import { getCurrentUser } from "../../../../store/users";
import { nanoid } from "nanoid";

const Booking = ({ price, id }) => {
    const [counters, setCounters] = useState({
        adults: 1,
        kids: 0
    });

    const dispatch = useDispatch();

    const currentUser = useSelector(getCurrentUser());

    const newDate = new Date();

    const {
        handleChange,
        validate,
        data: bookingFields,
        errors
    } = useForm(
        {
            entry: new Date(),
            departure: new Date(
                newDate.getFullYear(),
                newDate.getMonth(),
                newDate.getDate() + 1
            )
        },
        validatorConfig
    );

    const handleToggleCounter = (name, value) => {
        setCounters((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmitBooking = (e) => {
        e.preventDefault();
        const bookingRoom = {
            id: nanoid(),
            user: currentUser.id,
            room: id,
            created_at: Date.now()
        };
        dispatch(reserveRoom(bookingRoom));
    };

    useEffect(() => {
        validate();
    }, [bookingFields]);

    return (
        <form className="room-booking__form" onSubmit={handleSubmitBooking}>
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
                <h3 className="room-booking__price">
                    {/* Итого: {getFullRoomPrice()}₽ */}
                </h3>
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

Booking.propTypes = {
    price: PropTypes.number.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Booking;
