import React from "react";
import Header from "../components/common/Header";
import BreadCrumbs from "../components/common/BreadCrumbs";
import Container from "../components/common/Container";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";

const Rooms = ({ ...rest }) => {
    return (
        <>
            <Header />
            <Container>
                <BreadCrumbs {...rest} />
                <Outlet />
            </Container>
            <Footer />
        </>
    );
};

export default Rooms;
