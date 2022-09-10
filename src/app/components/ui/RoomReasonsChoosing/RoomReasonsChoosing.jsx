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
      description: "Отель имеет цены по соотношению цена/качество",
    },
    {
      name: "Безопасность",
      id: 2,
      image: lock,
      description: "Служба охраны всегда следит за вашей безопасностью",
    },
    {
      name: "Онлайн",
      id: 3,
      image: online,
      description:
        "Управлять бронированием отеля вы можете прямо на нашем сайте!",
    },
  ];
  return (
    <ul className="room-reasons__list">
      {reasons.map((item) => (
        <li className="room-reasons__item" key={item.id}>
          <div className="room-reasons__card">
            <div className="room-reasons__card-header">
              <img
                src={item.image}
                alt=""
                className="room-reasons__card-image"
              />
              <h3 className="room-reasons__card-title">{item.name}</h3>
            </div>
            <p className="room-reasons__card-description">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RoomReasonsChoosing;
