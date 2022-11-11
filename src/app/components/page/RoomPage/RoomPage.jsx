import React from "react";
import ImageSlider from "../../common/ImageSlider";
import Fab from "@mui/material/Fab";
import RoomReasonsChoosingList from "../../ui/room/RoomReasonsChoosing";
import Rating from "../../common/Rating";
import RoomComfortList from "../../ui/room/RoomComfortList";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RoomBreakFastList from "../../ui/room/RoomBreakfastList";
import Booking from "../../ui/room/booking/Booking";
import RoomStatisticsBar from "../../ui/room/RoomStatisticsBar";
import ReviewsForm from "../../ui/forms/ReviewsForm";
import RoomRulesCard from "../../ui/room/RoomRulesCard";
import RoomReviews from "../../ui/room/RoomReviews";
import { useSelector } from "react-redux";
import { getRoomById } from "../../../store/rooms";
import { getCurrentUser } from "../../../store/users";
import { useParams } from "react-router-dom";

const RoomPage = () => {
    const { roomId } = useParams();
    const room = useSelector(getRoomById(roomId));
    const currentUser = useSelector(getCurrentUser());

    if (room) {
        return (
            <>
                <main className="room__page">
                    <section className="room-cover">
                        <div className="room-cover__head-content">
                            <div className="room-cover__main-content">
                                <div className="room-cover__title-wrapper">
                                    <Fab
                                        size="small"
                                        sx={{
                                            backgroundColor:
                                                "rgb(134, 118, 226)",
                                            color: "#FFFFFF"
                                        }}
                                        aria-label="like"
                                    >
                                        <FavoriteIcon />
                                    </Fab>
                                    <h1 className="room-cover__title">
                                        Отель: {room.title}
                                    </h1>
                                </div>
                                <p className="room-cover__type">
                                    <span className="room-cover__type-text">
                                        Тип:{" "}
                                    </span>
                                    {room.type}
                                </p>
                            </div>
                            <div className="room-cover__rate-block">
                                <Rating
                                    value={room.rate}
                                    label="Общий рейтинг"
                                    readOnly
                                    sx={{
                                        color: "rgb(234, 166, 255)",
                                        fontSize: "30px"
                                    }}
                                />
                            </div>
                        </div>
                        <div className="room-cover__swiper-slider">
                            <ImageSlider
                                items={room.images}
                                className="room-cover__swiper-image"
                                autoplay={{
                                    delay: 1000,
                                    disableOnInteraction: false
                                }}
                            />
                        </div>
                    </section>
                    <section className="room-reasons">
                        <RoomReasonsChoosingList />
                    </section>
                    <section className="room-comfort">
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
                    </section>
                    <section className="room-booking">
                        <h2 className="room-booking__title">Бронирование</h2>
                        <div className="room-booking__booking-block">
                            <Booking {...room} />
                        </div>
                    </section>
                    <section className="room-reviews">
                        <h2 className="room-section-title">
                            Отзывы посетителей данного отеля
                        </h2>
                        <div className="room-reviews__comments">
                            <RoomReviews />
                        </div>
                        {currentUser && (
                            <div className="room-reviews__form">
                                <ReviewsForm />
                                <div className="room-reviews__statistics">
                                    <h2 className="room-reviews__statistics-title">
                                        Статистика по отзывам
                                    </h2>
                                    <RoomStatisticsBar />
                                </div>
                            </div>
                        )}
                    </section>
                </main>
            </>
        );
    }
};

export default RoomPage;
