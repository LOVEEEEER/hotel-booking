import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/common/Header";
import RoomsListPage from "../components/page/RoomsListPage";
import RoomPage from "../components/page/RoomPage";
// import Breadcrumbs from "../components/common/Breadcrumbs";
import Container from "../components/common/Container";

const Rooms = ({ ...rest }) => {
    return (
        <>
            <Header />
            <Container>
                {/* <Breadcrumbs {...rest} /> */}
                <Routes>
                    <Route path="" element={<RoomsListPage />} />
                    <Route path=":roomId" element={<RoomPage />} />
                </Routes>
            </Container>
        </>
    );
};

export default Rooms;
