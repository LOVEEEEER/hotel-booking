import React from "react";
import PropTypes from "prop-types";
import QRCode from "react-qr-code";
import { displayDate } from "../../../../../utils/dateService";
// import Button from "../../../../common/Button";
// import { useDispatch } from "react-redux";
// import { deleteUserBooking } from "../../../../../store/booking";
import bankIcon from "../../../../../assets/svg/comfort/bank.svg";
import wifiIcon from "../../../../../assets/svg/comfort/wifi.svg";
import swimmingPoolIcon from "../../../../../assets/svg/comfort/swimming-pool.svg";
import gymIcon from "../../../../../assets/svg/comfort/gym.svg";
import conditionerIcon from "../../../../../assets/svg/comfort/conditioner.svg";

const BookingCard = ({ item: bookingItem, room }) => {
    // const dispatch = useDispatch();
    // const handleDelete = (id) => {
    //     dispatch(deleteUserBooking(id));
    // };
    const getPropertyImage = (item) => {
        const property = {};
        switch (item) {
            case "wifi":
                property.icon = wifiIcon;
                property.name = "Wi-Fi";
                break;
            case "bankCard":
                property.icon = bankIcon;
                property.name = "Банкомат";
                break;
            case "swimmingPool":
                property.icon = swimmingPoolIcon;
                property.name = "Бассейн";
                break;
            case "gym":
                property.icon = gymIcon;
                property.name = "Тренажерный зал";
                break;
            case "conditioner":
                property.icon = conditionerIcon;
                property.name = "Кондинционер";
                break;
            default:
                return property;
        }
        return property;
    };
    if (!bookingItem) {
        return "Список бронирований пуст";
    }
    return (
        <div className="room booking__card">
            <div className="booking__info">
                <QRCode
                    size={256}
                    style={{
                        height: "auto",
                        maxWidth: "11%",
                        width: "11%"
                    }}
                    value={bookingItem.id}
                    viewBox={`0 0 256 256`}
                />
                <div className="booking__properties">
                    <h3 className="booking__properties-title">
                        Информация об отеле
                    </h3>
                    <ul className="booking__info-item">
                        <li className="booking__info-item">
                            <span className="booking__info-title">
                                Номер: {room.title}
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="booking__properties">
                    <h3 className="booking__properties-title">
                        В стоимость бронирования входит:
                    </h3>
                    <ul className="booking__properties-list">
                        {room.comfort.map((item) => {
                            const propertyInfo = getPropertyImage(item);
                            return (
                                <li
                                    className="booking__properties-item"
                                    key={item.id}
                                >
                                    <div className="booking__room-property">
                                        <img
                                            src={propertyInfo.icon}
                                            alt={item}
                                            className="booking__room-property_icon"
                                        />
                                        <span className="booking__room-property_name">
                                            {propertyInfo.name}
                                        </span>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="booking__properties">
                    <h3 className="booking__properties-title">Завтраки</h3>
                    <ul className="booking__breakfast-list">
                        {room.breakfast.map((item) => {
                            return (
                                <li
                                    className="booking__properties-item"
                                    key={item.id}
                                >
                                    <div className="booking__room-property">
                                        <img
                                            src={item.image}
                                            alt={item}
                                            className="booking__room-property_icon"
                                        />
                                        <span className="booking__room-property_name">
                                            {item.name}
                                        </span>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className="booking__control">
                <div className="booking__control-date_block">
                    <span className="booking__control-text">Заезд </span>
                    <span className="booking__control-date_text">
                        {displayDate(bookingItem.entry)}
                    </span>
                </div>
                <div className="booking__control-date_block">
                    <span className="booking__control-text">Выезд </span>
                    <span className="booking__control-date_text">
                        {displayDate(bookingItem.departure)}
                    </span>
                </div>
                {/* <Button
                    variant="outlined"
                    onClick={() => handleDelete(bookingItem.id)}
                >
                    Отмена
                </Button> */}
            </div>
        </div>
    );
};

BookingCard.propTypes = {
    room: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired
};

export default BookingCard;
