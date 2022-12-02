import React from "react";
import BreadCrumbs from "../components/common/Breadcrumbs";
import Container from "../components/common/Container";
import Header from "../components/common/Header";
import AdminPage from "../components/page/AdminPage";

const Admin = () => {
    return (
        <>
            <Header />
            <Container>
                <BreadCrumbs />
                <AdminPage />
            </Container>
        </>
    );
};

export default Admin;
