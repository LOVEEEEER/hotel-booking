import React from "react";
import { useSelector } from "react-redux";
import { getUserBooking } from "../../../store/booking";
import { getRooms } from "../../../store/rooms";
import BookingCard from "../../ui/BookingCard/BookingCard";

const BookingPage = () => {
    const userBooking = useSelector(getUserBooking());
    const rooms = useSelector(getRooms());
    const getRoomById = (id) => {
        return rooms.find((room) => room.id === id);
    };
    if (rooms && userBooking) {
        return (
            <main className="booking__page">
                {userBooking.length ? (
                    <ul className="booking__list">
                        {userBooking.map((item) => {
                            const room = getRoomById(item.room);
                            return (
                                <li className="booking__item" key={item.id}>
                                    <BookingCard item={item} room={room} />
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <div className="booking__error-message">
                        Вы пока не забронировали ни одного номера
                    </div>
                )}
            </main>
        );
    }
};

export default BookingPage;
