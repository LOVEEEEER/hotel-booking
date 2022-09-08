import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const RoomQualities = ({ comfort, rate }) => {
  const getLengthOfAlerts = () => {
    return document.body.getElementsByClassName("room-info__qualities-item")
      .length;
  };
  return (
    <>
      <ul className="room-info__qualities-list">
        <li className="room-info__qualities-item">
          {rate >= 4 && getLengthOfAlerts() < 4 ? (
            <Alert severity="info">
              <AlertTitle>Высокий рейтинг</AlertTitle>
              Данный отель имеет рейтинг {rate} и круче остальных
            </Alert>
          ) : (
            ""
          )}
        </li>
        <li className="room-info__qualities-item">
          {comfort.includes("parking") && getLengthOfAlerts() < 4 ? (
            <Alert severity="info">
              <AlertTitle>Частная парковка</AlertTitle>В наличии есть парковка.
              Где ваш автомобиль под охраной 24/7.
            </Alert>
          ) : (
            ""
          )}
        </li>
      </ul>
    </>
  );
};

export default RoomQualities;
