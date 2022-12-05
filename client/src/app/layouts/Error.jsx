import React from "react";
import Container from "../components/common/Container";
import Header from "../components/common/Header";
import ErrorPage from "../components/page/ErrorPage";

const Error = () => {
    return (
        <>
            <Header />
            <Container>
                <ErrorPage />
            </Container>
        </>
    );
};

export default Error;
