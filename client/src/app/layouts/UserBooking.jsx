import React from "react";
import Header from "../components/common/Header";
import Container from "../components/common/Container";
import BookingPage from "../components/page/BookingPage";
import BreadCrumbs from "../components/common/Breadcrumbs";

const UserBooking = () => {
    return (
        <>
            <Header />
            <Container>
                <BreadCrumbs />
                <BookingPage />
            </Container>
        </>
    );
};

export default UserBooking;
