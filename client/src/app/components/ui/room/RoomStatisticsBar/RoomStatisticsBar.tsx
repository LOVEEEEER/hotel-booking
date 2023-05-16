import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LinearProgress from "../../../common/LinearProgress";
import { getRoomCommentsRates } from "../../../../store/comments/commentsSelectors";

const RoomStatisticsBar: React.FC = () => {
    const ratesCount = [5, 4, 3, 2, 1];
    const { roomId } = useParams();
    const rates = useSelector(getRoomCommentsRates(roomId!));
    const getPercentOfRate = (rateItem: number) => {
        let sumOfRates = 0;
        rates.forEach((rate) => {
            if (rateItem === Math.round(rate)) {
                sumOfRates += 1;
            }
        });
        const percentRateItemOfRates = sumOfRates / (rates.length / 100);
        if (!percentRateItemOfRates) {
            return 0;
        }
        return percentRateItemOfRates;
    };
    if (rates) {
        return (
            <>
                <ul className="room-comments__comments-bar_list">
                    {ratesCount.map((item) => (
                        <li
                            key={item}
                            className="room-comments__comments-bar_item"
                        >
                            <span className="room-comments__rate">{item}</span>
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
    return <></>;
};

export default RoomStatisticsBar;
