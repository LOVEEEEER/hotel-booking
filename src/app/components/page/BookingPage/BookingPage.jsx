import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUserBooking } from "../../../store/booking";
import { getCurrentUser } from "../../../store/users";

const BookingPage = () => {
    const currentUser = useSelector(getCurrentUser());
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUserBooking(currentUser.id));
    }, []);

    return <h1>Booking Page</h1>;
};

export default BookingPage;
