import React from "react";
import RoomComfortList from "../RoomComfortList/RoomComfortList";
import RoomBreakFastList from "../RoomBreakfastList";

const RoomProperties = ({ ...rest }) => {
  return (
    <>
      <RoomComfortList {...rest} />
      {/* <h2 className="room-info__properties-title">Информация о завтраке</h2>
      <RoomBreakFastList {...rest} /> */}
    </>
  );
};

export default RoomProperties;
