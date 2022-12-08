import React from "react";
import { useSelector } from "react-redux";
import { getBookingList } from "../../../../store/slices/booking";
import BookingCard from "../../BookingCard/BookingCard";

const UsersBookingList = () => {
    const bookingList = useSelector(getBookingList());
    if (bookingList) {
        return (
            <ul className="admin__booking-list">
                {bookingList.map((item) => (
                    <li className="admin__booking-item" key={item.id}>
                        <BookingCard item={item} />
                    </li>
                ))}
            </ul>
        );
    }
};

export default UsersBookingList;
