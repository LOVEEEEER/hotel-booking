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
      <h2 className="room-properties__title">Преимущества этого варианта</h2>
      <ul className="room-info__properties-list">
        {comfort.includes("wifi") && (
          <li className="room-info__properties-item">
            <img
              src={wifiIcon}
              alt="wifi icon"
              className="room-info__properties-icon"
            />
            <span className="room-info__properties-name">Wi-Fi</span>
          </li>
        )}
        {comfort.includes("swimmingPool") && (
          <li className="room-info__properties-item">
            {/* <PoolIcon sx={{ fontSize: "40px", color: "rgb(134, 118, 226)" }} /> */}
            <img
              src={swimmingPoolIcon}
              alt="swipmming pool icon"
              className="room-info__properties-icon"
            />
            <span className="room-info__properties-name">Бассейн</span>
          </li>
        )}
        {comfort.includes("parking") && (
          <li className="room-info__properties-item">
            {/* <LocalParkingIcon
            sx={{ fontSize: "40px", color: "rgb(134, 118, 226)" }}
          /> */}
            <img
              src={parkingIcon}
              alt="parking icon"
              className="room-info__properties-icon"
            />
            <span className="room-info__properties-name">Парковка</span>
          </li>
        )}
        {comfort.includes("bankCard") && (
          <li className="room-info__properties-item">
            {/* <AccountBalanceIcon
            sx={{ fontSize: "40px", color: "rgb(134, 118, 226)" }}
          /> */}
            <img
              src={bankIcon}
              alt="bank icon"
              className="room-info__properties-icon"
            />
            <span className="room-info__properties-name">Банк</span>
          </li>
        )}
        {comfort.includes("gym") && (
          <li className="room-info__properties-item">
            {/* <FitnessCenterIcon
            sx={{ fontSize: "40px", color: "rgb(134, 118, 226)" }}
          /> */}
            <img
              src={gymIcon}
              alt="gym icon"
              className="room-info__properties-icon"
            />
            <span className="room-info__properties-name">Тренажерный зал</span>
          </li>
        )}
        {comfort.includes("conditioner") && (
          <li className="room-info__properties-item">
            {/* <AcUnitIcon sx={{ fontSize: "40px", color: "rgb(134, 118, 226)" }} /> */}
            <img
              src={conditionerIcon}
              alt="conditioner icon"
              className="room-info__properties-icon"
            />
            <span className="room-info__properties-name">Кондинционер</span>
          </li>
        )}
      </ul>
    </>
  );
};

export default RoomComfortList;
