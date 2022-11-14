import React from "react";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";
import { getUserBooking } from "../../../store/booking";
import { getRooms } from "../../../store/rooms";

const BookingPage = () => {
    const userBooking = useSelector(getUserBooking());
    const rooms = useSelector(getRooms());
    const getRoomById = (id) => {
        return rooms.find((room) => room.id === id);
    };
    if (rooms && userBooking) {
        return (
            <>
                {userBooking.map((item) => {
                    const room = getRoomById(item.room);
                    return (
                        <div className="booking-card" key={item.id}>
                            <h3>Название отеля: {room.title}</h3>
                            <QRCode
                                size={256}
                                style={{
                                    height: "auto",
                                    maxWidth: "7%",
                                    width: "7%"
                                }}
                                value={item.id}
                                viewBox={`0 0 256 256`}
                            />
                        </div>
                    );
                })}
            </>
        );
    }
};

export default BookingPage;
