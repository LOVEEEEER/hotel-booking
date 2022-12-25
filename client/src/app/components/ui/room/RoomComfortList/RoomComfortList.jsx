import React from "react";
import PropTypes from "prop-types";
import wifiIcon from "../../../../assets/svg/comfort/wifi.svg";
import swimmingPoolIcon from "../../../../assets/svg/comfort/swimming-pool.svg";
import parkingIcon from "../../../../assets/svg/comfort/parking.svg";
import bankIcon from "../../../../assets/svg/comfort/bank.svg";
import gymIcon from "../../../../assets/svg/comfort/gym.svg";
import conditionerIcon from "../../../../assets/svg/comfort/conditioner.svg";
import smokeIcon from "../../../../assets/svg/comfort/smoke.svg";
import "./scss/room-comfort-list.scss";

const RoomComfortList = ({
    hasSmokeZone,
    hasSwimmingPool,
    hasBank,
    hasWifi,
    hasGym,
    hasParking,
    hasConditioner
}) => {
    const getIsClearList = () => {
        const isClear =
            !hasSmokeZone &&
            !hasSwimmingPool &&
            !hasBank &&
            !hasWifi &&
            !hasGym &&
            !hasParking &&
            !hasConditioner;
        if (isClear) {
            return "Список удобств пуст";
        }
        return null;
    };
    return (
        <div className="room-info__comfort-block">
            <h2 className="room-comfort__title">Удобства</h2>
            <ul className="room-info__comfort-list">
                {hasSmokeZone && (
                    <li className="room-info__comfort-item">
                        <img
                            src={smokeIcon}
                            alt="smoke zone"
                            className="room-info__comfort-icon"
                        />
                        <span className="room-info__comfort-name">Курение</span>
                    </li>
                )}
                {hasSwimmingPool && (
                    <li className="room-info__comfort-item">
                        <img
                            src={swimmingPoolIcon}
                            alt="swimming pool"
                            className="room-info__comfort-icon"
                        />
                        <span className="room-info__comfort-name">Бассейн</span>
                    </li>
                )}
                {hasBank && (
                    <li className="room-info__comfort-item">
                        <img
                            src={bankIcon}
                            alt="bank"
                            className="room-info__comfort-icon"
                        />
                        <span className="room-info__comfort-name">Банк</span>
                    </li>
                )}
                {hasWifi && (
                    <li className="room-info__comfort-item">
                        <img
                            src={wifiIcon}
                            alt="wi-fi"
                            className="room-info__comfort-icon"
                        />
                        <span className="room-info__comfort-name">Wi-Fi</span>
                    </li>
                )}
                {hasGym && (
                    <li className="room-info__comfort-item">
                        <img
                            src={gymIcon}
                            alt="gym"
                            className="room-info__comfort-icon"
                        />
                        <span className="room-info__comfort-name">Зал</span>
                    </li>
                )}
                {hasParking && (
                    <li className="room-info__comfort-item">
                        <img
                            src={parkingIcon}
                            alt="parking"
                            className="room-info__comfort-icon"
                        />
                        <span className="room-info__comfort-name">
                            Парковка
                        </span>
                    </li>
                )}
                {hasConditioner && (
                    <li className="room-info__comfort-item">
                        <img
                            src={conditionerIcon}
                            alt="conditioner"
                            className="room-info__comfort-icon"
                        />
                        <span className="room-info__comfort-name">
                            Кондинционер
                        </span>
                    </li>
                )}
            </ul>
            {getIsClearList()}
        </div>
    );
};

RoomComfortList.propTypes = {
    hasSmokeZone: PropTypes.bool,
    hasSwimmingPool: PropTypes.bool,
    hasBank: PropTypes.bool,
    hasWifi: PropTypes.bool,
    hasGym: PropTypes.bool,
    hasParking: PropTypes.bool,
    hasConditioner: PropTypes.bool
};

export default RoomComfortList;
