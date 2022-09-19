import React, { useState, useEffect } from "react";
import api from "../../../api";
import ImageSlider from "../../common/ImageSlider";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RoomReasonsChoosingList from "../../ui/room/RoomReasonsChoosing";
import Rating from "../../common/Rating";
import { fromStorage, toStorage } from "../../../utils/localStorageService";
import RoomComfortList from "../../ui/room/RoomComfortList";
import RoomBreakFastList from "../../ui/room/RoomBreakfastList";
import Booking from "../../ui/room/Booking";
import RoomStatisticsBar from "../../ui/room/RoomStatisticsBar";
import ReviewsForm from "../../ui/forms/ReviewsForm";
import RoomRulesCard from "../../ui/room/RoomRulesCard";

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
              <div className="room-cover__swiper-slider">
                <ImageSlider
                  items={room.images}
                  className="room-cover__swiper-image"
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                />
              </div>
            </div>
          </section>
          <section className="room-reasons">
            <div className="container room-reasons__container">
              <RoomReasonsChoosingList />
            </div>
          </section>
          <section className="room-comfort">
            <div className="container room-comfort__container">
              <ul className="room-comfort__list">
                <li className="room-comfort__item">
                  <RoomComfortList comfort={room.comfort} />
                </li>
                <li className="room-comfort__item">
                  <RoomBreakFastList breakfast={room.breakfast} />
                </li>
                <li className="room-comfort__item">
                  <RoomRulesCard />
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
              <div className="room-reviews__form">
                <ReviewsForm />
                <div className="room-reviews__statistics">
                  <h2 className="room-reviews__statistics-title">
                    Статистика по отзывам
                  </h2>
                  <RoomStatisticsBar />
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
};

export default RoomPage;
