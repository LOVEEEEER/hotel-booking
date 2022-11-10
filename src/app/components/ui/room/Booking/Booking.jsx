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
import Dialog from "../../../common/Dialog";
import { useDialog } from "../../../../hooks/useDialog";

const Booking = ({ price, id }) => {
    const [counters, setCounters] = useState({
        adults: 1,
        kids: 0
    });
    const { open: openDialog, handleClickOpen, handleClose } = useDialog();
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
            entry: new Date(
                newDate.getFullYear(),
                newDate.getMonth(),
                newDate.getDate() + 1
            ),
            departure: new Date(
                newDate.getFullYear(),
                newDate.getMonth(),
                newDate.getDate() + 2
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
            created_at: Date.now(),
            fullPrice: getRoomPrice()
        };
        dispatch(reserveRoom(bookingRoom));
        handleClickOpen();
    };
    function getRoomPrice() {
        const daysCount =
            (bookingFields.departure.getTime() -
                bookingFields.entry.getTime()) /
            1000 /
            60 /
            60 /
            24;
        return daysCount * price;
    }
    useEffect(() => {
        validate();
    }, [bookingFields]);

    const isValid = Object.keys(errors).length === 0;
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
                {isValid && (
                    <h3 className="room-booking__price">
                        Итого: {getRoomPrice()}₽
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
            </div>

            {openDialog && (
                <Dialog
                    open={openDialog}
                    onClickOpen={handleClickOpen}
                    onClose={handleClose}
                />
            )}
        </form>
    );
};

Booking.propTypes = {
    price: PropTypes.number.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Booking;
