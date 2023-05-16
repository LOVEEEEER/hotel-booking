import React from "react";
import { useSelector } from "react-redux";
import BookingList from "../../ui/booking/BookingList";
import { getBookingLoadingStatus } from "../../../store/booking/bookingSelectors";

const BookingListPage: React.FC = () => {
    const bookingLoading = useSelector(getBookingLoadingStatus());
    if (!bookingLoading) {
        return (
            <main className="booking__page">
                <div className="booking">
                    <BookingList />
                </div>
            </main>
        );
    }
    return <></>;
};

export default BookingListPage;
