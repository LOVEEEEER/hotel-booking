import React, { useState, useEffect } from "react";
import api from "../../../api";
import RoomImageSlider from "../../ui/RoomImageSlider";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RoomProperties from "../../ui/RoomProperties";
import Booking from "../../ui/Booking/Booking";
import RoomReasonsChoosing from "../../ui/RoomReasonsChoosing/RoomReasonsChoosing";
import Rating from "../../common/Rating";

const RoomPage = ({ roomId }) => {
  const [room, setRoom] = useState();
  useEffect(() => {
    api.hotels.getById(roomId).then((data) => setRoom(data));
  }, [roomId]);
  if (room) {
    return (
      <>
        <main className="room__page">
          <section className="room-cover">
            <div className="container room-cover__container">
              <div className="room-cover__head-content">
                <div className="room-cover__main-content">
                  <div className="room-cover__title-wrapper">
                    <h1 className="room-cover__title">Отель: {room.title}</h1>
                    <FavoriteBorderIcon
                      sx={{ fontSize: "33px", color: "#666666" }}
                      className="love-icon"
                    />
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
                    sx={{ color: "rgb(234, 166, 255)" }}
                  />
                </div>
              </div>
              <RoomImageSlider items={room.images} />
            </div>
          </section>
          <section className="room-info">
            <div className="container room-info__container">
              <div className="room-info__properties">
                <div className="room-info__properties-block">
                  <RoomProperties
                    rate={room.rate}
                    comfort={room.comfort}
                    breakfast={room.breakfast}
                  />
                </div>
              </div>
              <div className="room-info__reasons">
                <h2 className="room-info__reasons-name">
                  5 причин выбрать данный отель
                </h2>
                <RoomReasonsChoosing />
              </div>
              {/* <div className="room-info__booking">
                <h3 className="room-info__booking-name">Бронирование</h3>
                <Booking roomPrice={room.price} />
              </div> */}
            </div>
          </section>
        </main>
      </>
    );
  }
};

export default RoomPage;
