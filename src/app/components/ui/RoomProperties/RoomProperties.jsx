import React from "react";
import RoomComfortList from "../RoomComfortList/RoomComfortList";
import RoomQualities from "../RoomQualities";

const RoomProperties = ({ ...rest }) => {
  return (
    <>
      <h2 className="room-info__properties-title">
        Преимущества этого варианта
      </h2>
      <RoomQualities {...rest} />
      <RoomComfortList {...rest} />
    </>
  );
};

export default RoomProperties;
