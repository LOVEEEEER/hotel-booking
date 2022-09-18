import React from "react";

const RoomBreakFastList = ({ breakfast }) => {
  return (
    <>
      <h2 className="room-properties__title">Питание</h2>
      <ul className="room-info__breakfast-list">
        {Object.keys(breakfast).map((item) => (
          <li key={breakfast[item].id} className="room-info__breakfast-item">
            <img
              src={breakfast[item].image}
              alt={breakfast[item].name}
              className="room-info__breakfast-flag"
            />
            <span className="room-info__breakfast-text">
              {breakfast[item].name} стол
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RoomBreakFastList;
