import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/Header";
import RoomsListPage from "../components/page/RoomsListPage";

const Rooms = () => {
  return (
    <>
      <Header />
      <RoomsListPage />
    </>
  );
};

export default Rooms;
