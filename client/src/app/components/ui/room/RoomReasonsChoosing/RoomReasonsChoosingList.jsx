import React from "react";
import walletIcon from "../../../../assets/svg/reasons/wallet.svg";
import lockIcon from "../../../../assets/svg/reasons/lock.svg";
import onlineIcon from "../../../../assets/svg/reasons/online.svg";

const RoomReasonsChoosingList = () => {
    const reasons = [
        {
            name: "Доступные цены",
            _id: 1,
            image: walletIcon,
            description: "Отель имеет цены по соотношению цена/качество"
        },
        {
            name: "Безопасность",
            _id: 2,
            image: lockIcon,
            description: "Служба охраны всегда следит за вашей безопасностью"
        },
        {
            name: "Онлайн",
            _id: 3,
            image: onlineIcon,
            description:
                "Управлять бронированием отеля вы можете прямо на нашем сайте!"
        }
    ];
    return (
        <>
            <h2 className="room-section-title">Причины выбрать данный отель</h2>
            <ul className="room-reasons__list">
                {reasons.map((item) => (
                    <li className="room-reasons__item" key={item._id}>
                        <div className="room-reasons__card">
                            <div className="room-reasons__card-header">
                                <img
                                    src={item.image}
                                    alt=""
                                    className="room-reasons__card-image"
                                />
                                <h3 className="room-reasons__card-title">
                                    {item.name}
                                </h3>
                            </div>
                            <p className="room-reasons__card-description">
                                {item.description}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default RoomReasonsChoosingList;
