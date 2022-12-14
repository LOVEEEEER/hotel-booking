import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {
    getBookingList,
    getUserBooking
} from "../../../../store/slices/booking";
import BookingCard from "../BookingCard/BookingCard";
import { usePaginate } from "../../../../hooks/usePaginate";
import Pagination from "../../../common/Pagination";
import "./scss/booking-list.scss";

const BookingList = ({ isAdmin, currentUserId }) => {
    const userBooking = useSelector(getUserBooking(currentUserId));
    const bookingList = useSelector(getBookingList());
    const { currentPage, itemsCrop, pageSize, handlePageChange } = usePaginate(
        isAdmin ? bookingList : userBooking,
        6
    );
    return (
        <>
            {itemsCrop.length > 0 ? (
                <>
                    <ul className="booking__list">
                        {itemsCrop.map((booking) => (
                            <li key={booking._id} className="booking__item">
                                <BookingCard isAdmin={isAdmin} item={booking} />
                            </li>
                        ))}
                    </ul>
                    <Pagination
                        currentPage={currentPage}
                        itemsCount={userBooking?.length || bookingList.length}
                        onChange={handlePageChange}
                        pageSize={pageSize}
                    />
                </>
            ) : (
                <p className="booking__error-message">
                    Список бронирований пуст
                </p>
            )}
        </>
    );
};

BookingList.propTypes = {
    isAdmin: PropTypes.bool,
    currentUserId: PropTypes.string
};

export default BookingList;
