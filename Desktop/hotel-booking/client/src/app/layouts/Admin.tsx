import React from "react";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Container from "../components/common/Container";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import AdminPage from "../components/pages/AdminPage";

const Admin = () => {
    return (
        <>
            <Header />
            <Container>
                <Breadcrumbs />
                <AdminPage />
            </Container>
            <Footer />
        </>
    );
};

export default Admin;
