import React from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Container from "../components/common/Container";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

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
