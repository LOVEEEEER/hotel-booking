import React from "react";
import { useSelector } from "react-redux";
import { getUserBooking } from "../../../store/booking";
import { getRooms } from "../../../store/rooms";
import BookingCard from "../../ui/room/booking/BookingCard";

const BookingPage = () => {
    const userBooking = useSelector(getUserBooking());
    const rooms = useSelector(getRooms());
    const getRoomById = (id) => {
        return rooms.find((room) => room.id === id);
    };
    if (rooms && userBooking) {
        return (
            <main className="booking__page">
                {userBooking.map((item) => {
                    const room = getRoomById(item.room);
                    return (
                        <BookingCard item={item} room={room} key={item.id} />
                    );
                })}
            </main>
        );
    }
};

export default BookingPage;
