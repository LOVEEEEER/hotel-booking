import React from "react";
import { useSelector } from "react-redux";
import { getUserBooking } from "../../../store/booking";
import { getCurrentUser } from "../../../store/users";
import BookingCard from "../../ui/BookingCard/BookingCard";

const BookingPage = () => {
    const currentUser = useSelector(getCurrentUser());
    const userBooking = useSelector(getUserBooking(currentUser.id));
    if (userBooking) {
        return (
            <main className="booking__page">
                {userBooking.length ? (
                    <ul className="booking__list">
                        {userBooking.map((item) => {
                            return (
                                <li className="booking__item" key={item.id}>
                                    <BookingCard item={item} />
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
