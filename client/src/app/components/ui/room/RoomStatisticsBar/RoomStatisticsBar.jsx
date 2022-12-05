import React from "react";
import LinearProgress from "../../../common/LinearProgress";

const RoomStatisticsBar = () => {
    const reviews = [5, 4, 3, 2, 1];
    return (
        <>
            <ul className="room-reviews__reviews-bar_list">
                {reviews.map((item) => (
                    <li key={item} className="room-reviews__reviews-bar_item">
                        <span className="room-reviews__rate">{item}</span>
                        <div className="linear-progress">
                            <LinearProgress value={Math.random() * 100} />
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default RoomStatisticsBar;
