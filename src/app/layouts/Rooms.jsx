import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/Header";
import RoomsListPage from "../components/page/RoomsListPage";
import RoomPage from "../components/page/RoomPage";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Container from "../components/common/Container";

const Rooms = ({ ...rest }) => {
    const { roomId } = useParams();
    return (
        <>
            <Header />
            <Container>
                <Breadcrumbs {...rest} />
                {roomId ? <RoomPage roomId={roomId} /> : <RoomsListPage />}
            </Container>
        </>
    );
};

export default Rooms;
