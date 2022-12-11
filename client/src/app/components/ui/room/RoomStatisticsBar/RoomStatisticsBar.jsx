import React from "react";
import { useSelector } from "react-redux";
import { getRoomRates } from "../../../../store/slices/comments";
import LinearProgress from "../../../common/LinearProgress";

const RoomStatisticsBar = () => {
    const ratesCount = [5, 4, 3, 2, 1];
    const rates = useSelector(getRoomRates());
    const getPercentOfRate = (rateItem) => {
        let sumOfRates = 0;
        rates.forEach((rate) => {
            if (rateItem === Math.round(rate)) {
                sumOfRates += 1;
            }
        });
        const percentRateItemOfRates = sumOfRates / (rates.length / 100);
        return percentRateItemOfRates;
    };
    if (rates) {
        return (
            <>
                <ul className="room-reviews__reviews-bar_list">
                    {ratesCount.map((item) => (
                        <li
                            key={item}
                            className="room-reviews__reviews-bar_item"
                        >
                            <span className="room-reviews__rate">{item}</span>
                            <div className="linear-progress">
                                <LinearProgress
                                    value={getPercentOfRate(item)}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
};

export default RoomStatisticsBar;
