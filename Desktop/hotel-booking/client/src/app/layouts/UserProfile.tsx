import React from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Container from "../components/common/Container";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const UserProfile = ({ ...rest }) => {
    return (
        <>
            <Header />
            <Container>
                <Breadcrumbs />
                <Outlet />
            </Container>
            <Footer />
        </>
    );
};

export default UserProfile;
