import React from "react";
import wallet from "../../../assets/svg/reasons/wallet.svg";
import lock from "../../../assets/svg/reasons/lock.svg";
import online from "../../../assets/svg/reasons/online.svg";
import chat from "../../../assets/svg/reasons/chat.svg";
import people from "../../../assets/svg/reasons/people.svg";

const RoomReasonsChoosing = () => {
  const reasons = [
    {
      name: "Доступные цены",
      id: 1,
      image: wallet,
    },
    {
      name: "Безопасность",
      id: 2,
      image: lock,
    },
    {
      name: "Онлайн бронирование",
      id: 3,
      image: online,
    },
    {
      name: "Русский язык",
      id: 4,
      image: chat,
    },
    {
      name: "Удобства",
      id: 5,
      image: people,
    },
  ];
  return (
    <ul className="room-info__reasons-list">
      {reasons.map((item) => (
        <li className="room-info__reasons-item">
          <img
            src={item.image}
            alt="reason-icon"
            className="room-info__reasons-image"
          />
          <span className="room-info__reasons-text">{item.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default RoomReasonsChoosing;
