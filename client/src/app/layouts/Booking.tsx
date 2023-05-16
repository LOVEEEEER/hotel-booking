import React from "react";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Container from "../components/common/Container";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import BookingListPage from "../components/pages/BookingListPage";

const Booking = () => {
    return (
        <>
            <Header />
            <Container>
                <Breadcrumbs />
                <BookingListPage />
            </Container>
            <Footer />
        </>
    );
};

export default Booking;
