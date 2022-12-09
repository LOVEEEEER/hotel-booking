import React from "react";
import PropTypes from "prop-types";
import vegetarianIcon from "../../../../assets/svg/breakfast/vegetarian.svg";
import italyIcon from "../../../../assets/svg/breakfast/italy.svg";
import swedenIcon from "../../../../assets/svg/breakfast/sweden.svg";

const RoomBreakFastList = ({ breakfast }) => {
    const getBreakFastIcon = (type) => {
        switch (type.toLowerCase()) {
            case "итальянский":
                return italyIcon;
            case "вегетарианский":
                return vegetarianIcon;
            case "шведский":
                return swedenIcon;

            default:
                break;
        }
    };
    return (
        <>
            <h2 className="room-comfort__title">Питание</h2>
            <ul className="room-info__breakfast-list">
                {breakfast.map((item) => (
                    <li key={item} className="room-info__breakfast-item">
                        <img
                            src={getBreakFastIcon(item)}
                            alt={item}
                            className="room-info__breakfast-flag"
                        />
                        <span className="room-info__breakfast-text">
                            {item} стол
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
