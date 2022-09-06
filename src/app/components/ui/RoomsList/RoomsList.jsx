import React from "react";
import PropTypes from "prop-types";
import RoomCard from "../RoomCard";

const RoomsList = ({ items }) => {
  return (
    <>
      <ul className="rooms__list">
        {items.map((item) => (
          <li key={item.id}>
            <RoomCard {...item} />
          </li>
        ))}
      </ul>
    </>
  );
};

RoomsList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default RoomsList;
