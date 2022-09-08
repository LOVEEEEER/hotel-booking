import React from "react";
import RoomComfortList from "../RoomComfortList/RoomComfortList";

const RoomProperties = ({ ...rest }) => {
  return (
    <>
      <h2 className="room-info__properties-title">
        Преимущества этого варианта
      </h2>
      <RoomComfortList {...rest} />
    </>
  );
};

export default RoomProperties;
