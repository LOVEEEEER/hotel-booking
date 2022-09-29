import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/Header";
import RoomsListPage from "../components/page/RoomsListPage";
import RoomPage from "../components/page/RoomPage";
import RoomsProvider from "../hooks/useRooms";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Container from "../components/common/Container";

const Rooms = ({ ...rest }) => {
    const { roomId } = useParams();
    return (
        <RoomsProvider>
            <Header />
            <Container>
                <Breadcrumbs {...rest} />
                {roomId ? <RoomPage roomId={roomId} /> : <RoomsListPage />}
            </Container>
        </RoomsProvider>
    );
};

export default Rooms;
