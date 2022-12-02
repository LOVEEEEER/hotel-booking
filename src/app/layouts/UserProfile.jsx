import React from "react";
import { Outlet } from "react-router-dom";
import BreadCrumbs from "../components/common/Breadcrumbs";
import Container from "../components/common/Container";
import Header from "../components/common/Header";

const UserProfile = () => {
    return (
        <>
            <Header />
            <Container>
                <BreadCrumbs />
                <Outlet />
            </Container>
        </>
    );
};

export default UserProfile;
