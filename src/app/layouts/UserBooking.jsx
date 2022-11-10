import React from "react";
import Header from "../components/common/Header";
import Container from "../components/common/Container";
import BookingPage from "../components/page/BookingPage";

const UserBooking = () => {
    return (
        <>
            <Header />
            <Container>
                <BookingPage />
            </Container>
        </>
    );
};

export default UserBooking;
