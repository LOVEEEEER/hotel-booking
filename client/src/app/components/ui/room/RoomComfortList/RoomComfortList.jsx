import React from "react";
import PropTypes from "prop-types";
import wifiIcon from "../../../../assets/svg/comfort/wifi.svg";
import swimmingPoolIcon from "../../../../assets/svg/comfort/swimming-pool.svg";
import parkingIcon from "../../../../assets/svg/comfort/parking.svg";
import bankIcon from "../../../../assets/svg/comfort/bank.svg";
import gymIcon from "../../../../assets/svg/comfort/gym.svg";
import conditionerIcon from "../../../../assets/svg/comfort/conditioner.svg";
import smokeIcon from "../../../../assets/svg/comfort/smoke.svg";

const RoomComfortList = ({
    hasSmokeZone,
    hasSwimmingPool,
    hasBank,
    hasWifi,
    hasGym,
    hasParking,
    hasConditioner
}) => {
    return (
        <>
            <h2 className="room-comfort__title">Преимущества этого варианта</h2>
            <ul className="room-info__comfort-list">
                {hasWifi && (
                    <li className="room-info__comfort-item">
                        <img
                            src={wifiIcon}
                            alt="wifi icon"
                            className="room-info__comfort-icon"
                        />
                        <span className="room-info__comfort-name">Wi-Fi</span>
                    </li>
                )}
                {hasSwimmingPool && (
                    <li className="room-info__comfort-item">
                        <img
                            src={swimmingPoolIcon}
                            alt="swipmming pool icon"
                            className="room-info__comfort-icon"
                        />
                        <span className="room-info__comfort-name">Бассейн</span>
                    </li>
                )}
                {hasParking && (
                    <li className="room-info__comfort-item">
                        <img
                            src={parkingIcon}
                            alt="parking icon"
                            className="room-info__comfort-icon"
                        />
                        <span className="room-info__comfort-name">
                            Парковка
                        </span>
                    </li>
                )}
                {hasBank && (
                    <li className="room-info__comfort-item">
                        <img
                            src={bankIcon}
                            alt="bank icon"
                            className="room-info__comfort-icon"
                        />
                        <span className="room-info__comfort-name">Банк</span>
                    </li>
                )}
                {hasGym && (
                    <li className="room-info__comfort-item">
                        <img
                            src={gymIcon}
                            alt="gym icon"
                            className="room-info__comfort-icon"
                        />
                        <span className="room-info__comfort-name">
                            Тренажерный зал
                        </span>
                    </li>
                )}
                {hasConditioner && (
                    <li className="room-info__comfort-item">
                        <img
                            src={conditionerIcon}
                            alt="conditioner icon"
                            className="room-info__comfort-icon"
                        />
                        <span className="room-info__comfort-name">
                            Кондинционер
                        </span>
                    </li>
                )}
                {hasSmokeZone && (
                    <li className="room-info__comfort-item">
                        <img
                            src={smokeIcon}
                            alt="smoke icon"
                            className="room-info__comfort-icon"
                        />
                        <span className="room-info__comfort-name">
                            Можно курить
                        </span>
                    </li>
                )}
            </ul>
        </>
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
