import React from "react";
import { Room } from "../../../../types/types";
import vegetarianIcon from "../../../../assets/svg/breakfast/vegetarian.svg";
import italyIcon from "../../../../assets/svg/breakfast/italy.svg";
import swedenIcon from "../../../../assets/svg/breakfast/sweden.svg";

type RoomBreakfastListProps = {
    breakfast: Room["breakfast"];
};

const RoomBreakfastList: React.FC<RoomBreakfastListProps> = ({ breakfast }) => {
    const getBreakfastIcon = (type: string) => {
        switch (type) {
            case "italian":
                return italyIcon;
            case "sweden":
                return vegetarianIcon;
            case "vegeterian":
                return swedenIcon;

            default:
                return type;
        }
    };
    const getBreakfastName = (type: string) => {
        switch (type) {
            case "italian":
                return "Итальянский";
            case "sweden":
                return "Шведский";
            case "vegeterian":
                return "Вегетерианский";

            default:
                return null;
        }
    };
    const getIsClear = () => {
        if (breakfast.length === 0) return "Завтраки не входят в проживание";
        return null;
    };

    return (
        <div className="room-comfort__breakfast-block">
            <h2 className="room-comfort__title">Питание</h2>
            <ul className="room-info__breakfast-list">
                {breakfast.map((item) => (
                    <li key={item} className="room-info__breakfast-item">
                        <img
                            src={getBreakfastIcon(item)}
                            alt={item}
                            className="room-info__breakfast-flag"
                        />
                        <span className="room-info__breakfast-text">
                            {getBreakfastName(item)} стол
                        </span>
                    </li>
                ))}
            </ul>
            {getIsClear()}
        </div>
    );
};

export default RoomBreakfastList;
