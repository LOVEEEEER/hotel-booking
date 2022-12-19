import React from "react";
import { useSelector } from "react-redux";
import { getBookingList } from "../../../../store/slices/booking";
import BookingCard from "../../BookingCard/BookingCard";

const UsersBookingList = () => {
    const bookingList = useSelector(getBookingList());
    if (bookingList) {
        return (
            <>
                {bookingList.length > 0 ? (
                    <ul className="admin__booking-list">
                        {bookingList.slice(0, 6).map((item) => (
                            <li className="admin__booking-item" key={item._id}>
                                <BookingCard item={item} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="booking__error-message">
                        Список бронирований пуст
                    </div>
                )}
            </>
        );
    }
};

export default UsersBookingList;
