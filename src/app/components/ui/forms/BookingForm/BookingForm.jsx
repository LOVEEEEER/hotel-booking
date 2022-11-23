import React from "react";
import PropTypes from "prop-types";
import { useForm } from "../../../../hooks/useForm";
import {
    getDaysCountFromTimeStamp,
    getPresenceBookingDate
} from "../../../../utils/dateService";
import Counter from "../../../common/Counter";
import DatePicker from "../../../common/form/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../../../store/users";
import { nanoid } from "nanoid";
import Button from "../../../common/Button";
import { reserveRoom } from "../../../../store/booking";

const BookingForm = ({ id, price: dayPrice, onOpenDialog }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(getCurrentUser());
    const { data, errors, handleChange } = useForm({
        entry: getPresenceBookingDate(1),
        departure: getPresenceBookingDate(2),
        adults: 1,
        kids: 0
    });
    const getRoomPrice = () => {
        const daysCount = getDaysCountFromTimeStamp(
            data.departure.getTime() - data.entry.getTime()
        );
        const guestsCount = data.adults + data.kids;
        return daysCount * guestsCount * dayPrice;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        e.preventDefault();
        const bookingRoom = {
            id: nanoid(),
            user: currentUser.id,
            room: id,
            created_at: Date.now(),
            fullPrice: getRoomPrice(data),
            entry: data.entry.getTime(),
            departure: data.departure.getTime()
        };
        dispatch(reserveRoom(bookingRoom));
        onOpenDialog();
    };
    const isValid = Object.keys(errors).length === 0;
    return (
        <form className="room-booking__form" onSubmit={handleSubmit}>
            <div>
                <DatePicker
                    sx={{ width: "170px", marginRight: "20px" }}
                    error={Boolean(errors.entry)}
                    helperText={errors.entry}
                    label="Заезд"
                    name="entry"
                    value={data.entry}
                    onChange={handleChange}
                />
                <DatePicker
                    sx={{ width: "170px" }}
                    error={Boolean(errors.departure)}
                    helperText={errors.departure}
                    label="Заезд"
                    name="departure"
                    value={data.departure}
                    onChange={handleChange}
                />
            </div>
            <div>
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
            </div>
        </form>
    );
};

BookingForm.propTypes = {
    id: PropTypes.string.isRequired,
    onOpenDialog: PropTypes.func.isRequired,
    price: PropTypes.number.isRequired
};

export default BookingForm;
