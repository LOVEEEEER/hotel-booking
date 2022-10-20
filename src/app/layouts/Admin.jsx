import React from "react";
import Container from "../components/common/Container";
import Header from "../components/common/Header";
import AdminPage from "../components/page/AdminPage";

const Admin = () => {
    return (
        <>
            <Header />
            <Container>
                <AdminPage />
            </Container>
        </>
    );
};

export default Admin;
