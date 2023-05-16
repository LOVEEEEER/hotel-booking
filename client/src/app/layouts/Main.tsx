import React from "react";
import Container from "../components/common/Container";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import MainPage from "../components/pages/MainPage";

const Main = () => {
    return (
        <>
            <Header />
            <Container>
                <MainPage />
            </Container>
            <Footer />
        </>
    );
};

export default Main;
