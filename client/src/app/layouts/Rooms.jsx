import React from "react";
import Header from "../components/common/Header";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Container from "../components/common/Container";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";

const Rooms = ({ ...rest }) => {
    return (
        <>
            <Header />
            <Container>
                <Breadcrumbs {...rest} />
                <Outlet />
            </Container>
            <Footer />
        </>
    );
};

export default Rooms;
