import React from "react";
import Header from "../components/common/Header";
import Container from "../components/common/Container";
import BookingPage from "../components/page/BookingPage";
import BreadCrumbs from "../components/common/BreadCrumbs";
import Footer from "../components/common/Footer";

const UserBooking = () => {
    return (
        <>
            <Header />
            <Container>
                <BreadCrumbs />
                <BookingPage />
            </Container>
            <Footer />
        </>
    );
};

export default UserBooking;
