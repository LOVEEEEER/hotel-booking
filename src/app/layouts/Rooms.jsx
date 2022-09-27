import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/Header";
import RoomsListPage from "../components/page/RoomsListPage";
import RoomPage from "../components/page/RoomPage";
import RoomsProvider from "../hooks/useRooms";

const Rooms = () => {
  const { roomId } = useParams();
  return (
    <RoomsProvider>
      <Header />
      {roomId ? <RoomPage roomId={roomId} /> : <RoomsListPage />}
    </RoomsProvider>
  );
};

export default Rooms;
