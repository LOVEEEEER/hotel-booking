import React from "react";
import Container from "../components/common/Container";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import ErrorPage from "../components/pages/ErrorPage";

const Error = () => {
    return (
        <>
            <Header />
            <Container>
                <ErrorPage />
            </Container>
            <Footer />
        </>
    );
};

export default Error;
