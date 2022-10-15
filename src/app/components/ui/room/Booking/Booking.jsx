import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { validatorConfig } from "./validatorConfig";
import DatePickForm from "../../forms/DatePickForm";
import Button from "../../../common/Button";
import BookingCounter from "../BookingCounter";
import { getFormatDate } from "../../../../utils/dateService";
import { useForm } from "../../../../hooks/useForm";

const Booking = ({ roomPrice }) => {
    const [counters, setCounters] = useState({
        adults: 1,
        kids: 0
    });

    const {
        handleChange,
        validate,
        data: bookingFields,
        errors
    } = useForm(
        {
            entry: getFormatDate(
                new Date(
                    new Date().getFullYear(),
                    new Date().getMonth(),
                    new Date().getDate() + 1
                )
            ),
            departure: getFormatDate(
                new Date(
                    new Date().getFullYear(),
                    new Date().getMonth(),
                    new Date().getDate() + 7
                )
            )
        },
        validatorConfig
    );

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const handleToggleCounter = (name, value) => {
        setCounters((prevState) => ({ ...prevState, [name]: value }));
    };

    useEffect(() => {
        validate();
    }, [bookingFields]);

    const getFullRoomPrice = () => {
        let tenantCount = 0;
        Object.keys(counters).forEach(
            (item) => (tenantCount += counters[item])
        );
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
                <h3 className="room-booking__price">
                    Итого: {getFullRoomPrice()}₽
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
    roomPrice: PropTypes.number.isRequired
};

export default Booking;
