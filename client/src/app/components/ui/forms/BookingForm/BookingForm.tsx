import React, { useState } from "react";
import { useSelector } from "react-redux";
import useForm from "../../../../hooks/useForm";
import { useAppDispatch } from "../../../../store/createStore";
import { Room } from "../../../../types/types";
import {
    getDaysCountFromTimeStamp,
    getPresenceBookingDate
} from "../../../../utils/dateService";
import Button from "../../../common/Button";
import Counter from "../../../common/Counter";
import DatePickerField from "../../../common/fields/DatePickerField";
import { validatorConfig } from "./validatorConfig";
import { getBookingError } from "../../../../store/booking/bookingSelectors";
import { getCurrentUserId } from "../../../../store/users/usersSelectors";
import { createBooking } from "../../../../store/booking/bookingActions";

type BookingFormProps = {
    room: Room;
    onOpenDialog: () => void;
};

const BookingForm: React.FC<BookingFormProps> = ({ room, onOpenDialog }) => {
    const dispatch = useAppDispatch();
    const bookingServerError = useSelector(getBookingError());
    const currentUserId = useSelector(getCurrentUserId())!;
    const [bookingError, setBookingError] = useState<string>();
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
        const daysCount = getDaysCountFromTimeStamp(
            data.departure.getTime() - data.entry.getTime()
        );
        const guestsCount = data.adults + data.kids;
        return Number(daysCount * guestsCount * room.price);
    };
    const handleSubmit = (e: React.FormEvent) => {
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
                roomId: room._id,
                fullPrice: getRoomPrice(),
                userId: currentUserId,
                ...data
            };

            dispatch(createBooking({ booking: bookingRoom, onOpenDialog }));
        }
    };
    const isValid = Object.keys(errors).length === 0;
    return (
        <form className="room-booking__form" onSubmit={handleSubmit}>
            <div className="room-booking__form-fields">
                <div className="room-booking__form-input">
                    <DatePickerField
                        sx={{ width: "100%" }}
                        label="Заезд"
                        name="entry"
                        value={data.entry}
                        error={errors.entry}
                        onChange={handleChange}
                    />
                </div>
                <div className="room-booking__form-input">
                    <DatePickerField
                        sx={{ width: "100%" }}
                        label="Заезд"
                        name="departure"
                        value={data.departure}
                        error={errors.departure}
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

export default BookingForm;
