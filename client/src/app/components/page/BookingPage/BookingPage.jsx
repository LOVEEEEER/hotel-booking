import React from "react";
import { useSelector } from "react-redux";
import { getBookingLoading } from "../../../store/slices/booking";
import { getCurrentUser } from "../../../store/slices/users";
import BookingList from "../../ui/booking/BookingList";
import "./scss/booking-page.scss";

const BookingPage = () => {
    const currentUser = useSelector(getCurrentUser());
    const bookingLoading = useSelector(getBookingLoading());
    if (!bookingLoading) {
        return (
            <main className="booking__page">
                <div className="booking">
                    <BookingList currentUserId={currentUser._id} />
                </div>
            </main>
        );
    }
};

export default BookingPage;
