import React from "react";
import PropTypes from "prop-types";

const RoomBreakFastList = ({ breakfast }) => {
    return (
        <>
            <h2 className="room-comfort__title">Питание</h2>
            <ul className="room-info__breakfast-list">
                {breakfast.map((item) => (
                    <li key={item.id} className="room-info__breakfast-item">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="room-info__breakfast-flag"
                        />
                        <span className="room-info__breakfast-text">
                            {item.name} стол
                        </span>
                    </li>
                ))}
            </ul>
        </>
    );
};

RoomBreakFastList.propTypes = {
    breakfast: PropTypes.arrayOf(
        PropTypes.exact({
            image: PropTypes.string,
            name: PropTypes.string,
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        })
    )
};

export default RoomBreakFastList;
