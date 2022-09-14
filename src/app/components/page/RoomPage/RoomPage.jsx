import React, { useState, useEffect } from "react";
import api from "../../../api";
import RoomImageSlider from "../../ui/RoomImageSlider";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RoomReasonsChoosing from "../../ui/RoomReasonsChoosing/RoomReasonsChoosing";
import Rating from "../../common/Rating";
import { fromStorage, toStorage } from "../../../utils/localStorageService";
import RoomComfortList from "../../ui/RoomComfortList/RoomComfortList";
import RoomBreakFastList from "../../ui/RoomBreakfastList";
import Booking from "../../ui/Booking";

const RoomPage = ({ roomId }) => {
  const [room, setRoom] = useState();
  useEffect(() => {
    api.hotels.getById(roomId).then((data) => setRoom(data));
  }, [roomId]);
  useEffect(() => {}, []);
  const handleFavouriteRoom = ({ target }) => {
    const favouriteRoomsFromStorage = fromStorage("rooms");
    if (!favouriteRoomsFromStorage) {
      toStorage("rooms", [room]);
    } else {
      favouriteRoomsFromStorage.unshift(room);
      toStorage("rooms", favouriteRoomsFromStorage);
    }
  };
  if (room) {
    return (
      <>
        <main className="room__page">
          <section className="room-cover">
            <div className="container room-cover__container">
              <div className="room-cover__head-content">
                <div className="room-cover__main-content">
                  <div className="room-cover__title-wrapper">
                    <FavoriteBorderIcon
                      sx={{ fontSize: "33px", color: "#666666" }}
                      className="love-icon"
                      onClick={handleFavouriteRoom}
                    />
                    <h1 className="room-cover__title">Отель: {room.title}</h1>
                  </div>
                  <p className="room-cover__type">
                    <span className="room-cover__type-text">Тип: </span>
                    {room.type}
                  </p>
                </div>
                <div className="room-cover__rate-block">
                  <Rating
                    value={room.rate}
                    label="Общий рейтинг"
                    readOnly
                    sx={{ color: "rgb(234, 166, 255)", fontSize: "30px" }}
                  />
                </div>
              </div>
              <RoomImageSlider items={room.images} autoplay={true} />
            </div>
          </section>
          <section className="room-reasons">
            <div className="container room-reasons__container">
              <h2 className="room-section-title">
                Причины выбрать данный отель
              </h2>
              <RoomReasonsChoosing />
            </div>
          </section>
          <section className="room-properties">
            <div className="container room-properties__container">
              <ul className="room-properties__list">
                <li className="room-properties__item">
                  <h2 className="room-properties__title">
                    Преимущества этого варианта
                  </h2>
                  <RoomComfortList comfort={room.comfort} />
                </li>
                <li className="room-properties__item">
                  <h2 className="room-properties__title">Питание</h2>
                  <RoomBreakFastList breakfast={room.breakfast} />
                </li>
                <li className="room-properties__item">
                  <h2 className="room-properties__title">Правила</h2>
                  <p className="room-properties__description room-properties__rules-description">
                    Нельзя с питомцами Без вечеринок и мероприятий Время
                    прибытия — после 13:00, а выезд до 12:00
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section className="room-booking">
            <div className="container room-booking__container">
              <h2 className="room-booking__title">Бронирование</h2>
              <div className="room-booking__booking-block">
                <Booking roomPrice={room.price} />
              </div>
            </div>
          </section>
          <section className="room-reviews">
            <div className="container room-reviews__container">
              <h2 className="room-section-title">
                Отзывы посетителей данного отеля
              </h2>
            </div>
          </section>
        </main>
      </>
    );
  }
};

export default RoomPage;
