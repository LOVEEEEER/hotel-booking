import React from "react";
import Container from "../components/common/Container";
import Header from "../components/common/Header";
import MainPage from "../components/page/MainPage";

const Main = () => {
    return (
        <>
            <Header />
            <Container>
                <MainPage />
            </Container>
        </>
    );
};

export default Main;
