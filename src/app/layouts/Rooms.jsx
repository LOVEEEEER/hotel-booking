import React from "react";
import Header from "../components/common/Header";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Container from "../components/common/Container";
import { Outlet } from "react-router-dom";

const Rooms = ({ ...rest }) => {
    return (
        <>
            <Header />
            <Container>
                <Breadcrumbs {...rest} />
                <Outlet />
            </Container>
        </>
    );
};

export default Rooms;
