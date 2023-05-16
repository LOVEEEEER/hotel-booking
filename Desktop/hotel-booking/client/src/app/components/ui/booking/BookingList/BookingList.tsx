import React from "react";
import { useSelector } from "react-redux";
import usePaginate from "../../../../hooks/usePaginate";
import Pagination from "../../../common/Pagination";
import BookingCard from "../BookingCard";
import { getCurrentUserId } from "../../../../store/users/usersSelectors";
import {
    getBookingList,
    getUserBookingList
} from "../../../../store/booking/bookingSelectors";

type BookingListProps = {
    isAdmin?: boolean;
};

const BookingList: React.FC<BookingListProps> = ({ isAdmin }) => {
    const currentUserId = useSelector(getCurrentUserId())!;
    const userBookingList = useSelector(getUserBookingList(currentUserId));
    const bookingList = useSelector(getBookingList());
    const { currentPage, itemsCrop, pageSize, handleChangePage } = usePaginate(
        isAdmin ? bookingList : userBookingList,
        6
    );
    return (
        <>
            {itemsCrop.length > 0 ? (
                <>
                    <ul className="booking__list">
                        {itemsCrop.map((booking) => (
                            <li key={booking._id} className="booking__item">
                                <BookingCard
                                    isAdmin={isAdmin}
                                    booking={booking}
                                />
                            </li>
                        ))}
                    </ul>
                    <Pagination
                        currentPage={currentPage}
                        itemsCount={
                            userBookingList?.length || bookingList.length
                        }
                        onChange={handleChangePage}
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

export default BookingList;
