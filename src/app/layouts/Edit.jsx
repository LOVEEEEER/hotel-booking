import React from "react";
import Container from "../components/common/Container";
import Header from "../components/common/Header";
import EditUserPage from "../components/page/EditUserPage";

const Edit = () => {
    return (
        <>
            <Header />
            <Container>
                <EditUserPage />
            </Container>
        </>
    );
};

export default Edit;
