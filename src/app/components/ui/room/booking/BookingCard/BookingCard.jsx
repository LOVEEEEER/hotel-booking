import React from "react";
import PropTypes from "prop-types";
import QRCode from "react-qr-code";
import { displayDate } from "../../../../../utils/dateService";
import Button from "../../../../common/Button";
import { useDispatch } from "react-redux";
import { deleteUserBooking } from "../../../../../store/booking";

const BookingCard = ({ item: bookingItem, room }) => {
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteUserBooking(id));
    };
    console.log(bookingItem);
    if (!bookingItem) {
        return "Список бронирований пуст";
    }
    return (
        <div
            className="room booking__card"
            style={{ backgroundImage: `url(${room.images[0]})` }}
        >
            <div className="booking__info">
                <QRCode
                    size={256}
                    style={{
                        height: "auto",
                        maxWidth: "25%",
                        width: "25%"
                    }}
                    value={bookingItem.id}
                    viewBox={`0 0 256 256`}
                />
                <ul className="booking__properties-list">
                    <li className="booking__properties-item">
                        <span className="booking__properties-text">
                            Номер: {room.title}
                        </span>
                    </li>
                    <li className="booking__properties-item">
                        <span className="booking__properties-text">
                            Заезд: {displayDate(bookingItem.entry)} в 13:00
                        </span>
                    </li>
                    <li className="booking__properties-item">
                        <span className="booking__properties-text">
                            Выезд: {displayDate(bookingItem.departure)}
                        </span>
                    </li>
                    <li className="booking__properties-item">
                        <span className="booking__properties-text">
                            Тип номера: {room.type}
                        </span>
                    </li>
                </ul>
            </div>
            <Button
                variant="outlined"
                onClick={() => handleDelete(bookingItem.id)}
            >
                Отозвать бронь
            </Button>
        </div>
    );
};

BookingCard.propTypes = {
    room: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired
};

export default BookingCard;
