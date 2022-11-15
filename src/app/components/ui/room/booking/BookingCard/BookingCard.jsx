import React from "react";
import PropTypes from "prop-types";
import QRCode from "react-qr-code";
import { displayDate } from "../../../../../utils/dateService";
import Button from "../../../../common/Button";

const BookingCard = ({ item: bookingItem, room }) => {
    return (
        <div className="room booking__card">
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
            <Button variant="outlined">Отозвать бронь</Button>
        </div>
    );
};

BookingCard.propTypes = {
    room: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired
};

export default BookingCard;
