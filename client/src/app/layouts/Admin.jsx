import React from "react";
import BreadCrumbs from "../components/common/BreadCrumbs";
import Container from "../components/common/Container";
import Footer from "../components/common/Footer";
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
            <Footer />
        </>
    );
};

export default Admin;
