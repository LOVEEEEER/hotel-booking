import React from "react";
import WifiIcon from "@mui/icons-material/Wifi";
import PoolIcon from "@mui/icons-material/Pool";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const RoomComfortList = ({ comfort }) => {
  return (
    <ul className="room-info__properties-list">
      {comfort.includes("wifi") && (
        <li className="room-info__properties-item">
          <WifiIcon sx={{ fontSize: "40px", color: "rgb(134, 118, 226)" }} />
          <span className="room-info__properties-name">Wi-Fi</span>
        </li>
      )}
      {comfort.includes("swimmingPool") && (
        <li className="room-info__properties-item">
          <PoolIcon sx={{ fontSize: "40px", color: "rgb(134, 118, 226)" }} />
          <span className="room-info__properties-name">Бассейн</span>
        </li>
      )}
      {comfort.includes("parking") && (
        <li className="room-info__properties-item">
          <LocalParkingIcon
            sx={{ fontSize: "40px", color: "rgb(134, 118, 226)" }}
          />
          <span className="room-info__properties-name">Парковка</span>
        </li>
      )}
      {comfort.includes("bankCard") && (
        <li className="room-info__properties-item">
          <AccountBalanceIcon
            sx={{ fontSize: "40px", color: "rgb(134, 118, 226)" }}
          />
          <span className="room-info__properties-name">Банк</span>
        </li>
      )}
      {comfort.includes("gym") && (
        <li className="room-info__properties-item">
          <FitnessCenterIcon
            sx={{ fontSize: "40px", color: "rgb(134, 118, 226)" }}
          />
          <span className="room-info__properties-name">Тренажерный зал</span>
        </li>
      )}
      {comfort.includes("conditioner") && (
        <li className="room-info__properties-item">
          <AcUnitIcon sx={{ fontSize: "40px", color: "rgb(134, 118, 226)" }} />
          <span className="room-info__properties-name">Кондинционер</span>
        </li>
      )}
    </ul>
  );
};

export default RoomComfortList;
