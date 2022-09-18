import React from "react";
import wifiIcon from "../../../../assets/svg/comfort/wifi.svg";
import swimmingPoolIcon from "../../../../assets/svg/comfort/swimming-pool.svg";
import parkingIcon from "../../../../assets/svg/comfort/parking.svg";
import bankIcon from "../../../../assets/svg/comfort/bank.svg";
import gymIcon from "../../../../assets/svg/comfort/gym.svg";
import conditionerIcon from "../../../../assets/svg/comfort/conditioner.svg";

const RoomComfortList = ({ comfort }) => {
  return (
    <>
      <h2 className="room-comfort__title">Преимущества этого варианта</h2>
      <ul className="room-info__comfort-list">
        {comfort.includes("wifi") && (
          <li className="room-info__comfort-item">
            <img
              src={wifiIcon}
              alt="wifi icon"
              className="room-info__comfort-icon"
            />
            <span className="room-info__comfort-name">Wi-Fi</span>
          </li>
        )}
        {comfort.includes("swimmingPool") && (
          <li className="room-info__comfort-item">
            <img
              src={swimmingPoolIcon}
              alt="swipmming pool icon"
              className="room-info__comfort-icon"
            />
            <span className="room-info__comfort-name">Бассейн</span>
          </li>
        )}
        {comfort.includes("parking") && (
          <li className="room-info__comfort-item">
            <img
              src={parkingIcon}
              alt="parking icon"
              className="room-info__comfort-icon"
            />
            <span className="room-info__comfort-name">Парковка</span>
          </li>
        )}
        {comfort.includes("bankCard") && (
          <li className="room-info__comfort-item">
            <img
              src={bankIcon}
              alt="bank icon"
              className="room-info__comfort-icon"
            />
            <span className="room-info__comfort-name">Банк</span>
          </li>
        )}
        {comfort.includes("gym") && (
          <li className="room-info__comfort-item">
            <img
              src={gymIcon}
              alt="gym icon"
              className="room-info__comfort-icon"
            />
            <span className="room-info__comfort-name">Тренажерный зал</span>
          </li>
        )}
        {comfort.includes("conditioner") && (
          <li className="room-info__comfort-item">
            <img
              src={conditionerIcon}
              alt="conditioner icon"
              className="room-info__comfort-icon"
            />
            <span className="room-info__comfort-name">Кондинционер</span>
          </li>
        )}
      </ul>
    </>
  );
};

export default RoomComfortList;
