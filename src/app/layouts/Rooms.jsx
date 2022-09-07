import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/Header";
import RoomsListPage from "../components/page/RoomsListPage";
import RoomPage from "../components/page/RoomPage";

const Rooms = () => {
  const { roomId } = useParams();
  return (
    <>
      <Header />
      {roomId ? <RoomPage roomId={roomId} /> : <RoomsListPage />}
    </>
  );
};

export default Rooms;
