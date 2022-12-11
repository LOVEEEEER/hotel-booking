import React from "react";
import { useSelector } from "react-redux";
import { usePaginate } from "../../../hooks/usePaginate";
import { getUserBooking } from "../../../store/slices/booking";
import { getCurrentUser } from "../../../store/slices/users";
import Pagination from "../../common/Pagination";
import BookingCard from "../../ui/BookingCard/BookingCard";

const BookingPage = () => {
    const currentUser = useSelector(getCurrentUser());
    const userBooking = useSelector(getUserBooking(currentUser._id));
    const { currentPage, itemsCrop, pageSize, handlePageChange } = usePaginate(
        userBooking || [],
        6
    );
    if (userBooking) {
        return (
            <main className="booking__page">
                <div className="booking">
                    {userBooking.length ? (
                        <>
                            <ul className="booking__list">
                                {itemsCrop.map((item) => {
                                    return (
                                        <li
                                            className="booking__item"
                                            key={item._id}
                                        >
                                            <BookingCard item={item} />
                                        </li>
                                    );
                                })}
                            </ul>
                            <Pagination
                                currentPage={currentPage}
                                itemsCount={userBooking.length}
                                onChange={handlePageChange}
                                pageSize={pageSize}
                            />
                        </>
                    ) : (
                        <div className="booking__error-message">
                            Вы пока не забронировали ни одного номера
                        </div>
                    )}
                    <div className="booking__push"></div>
                </div>
            </main>
        );
    }
};

export default React.memo(BookingPage);
