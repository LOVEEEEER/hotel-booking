import React from "react";
import ImageSlider from "../../common/ImageSlider";
import RoomReasonsChoosingList from "../../ui/room/RoomReasonsChoosing";
import RoomComfortList from "../../ui/room/RoomComfortList";
import RoomBreakFastList from "../../ui/room/RoomBreakfastList";
import Booking from "../../ui/room/booking/Booking";
import RoomStatisticsBar from "../../ui/room/RoomStatisticsBar";
import ReviewsForm from "../../ui/forms/ReviewsForm";
import RoomRulesCard from "../../ui/room/RoomRulesCard";
import RoomReviews from "../../ui/room/RoomReviews";
import { useSelector } from "react-redux";
import { getRoomById } from "../../../store/slices/rooms";
import { getIsLoggedIn } from "../../../store/slices/users";
import { useParams } from "react-router-dom";
import RoomTopInfo from "../../ui/room/RoomTopInfo";

const RoomPage = () => {
    const { roomId } = useParams();
    const room = useSelector(getRoomById(roomId));
    const isLoggedIn = useSelector(getIsLoggedIn());

    if (room) {
        return (
            <>
                <main className="room__page">
                    <section className="room-cover">
                        <RoomTopInfo {...room} />
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
                    {isLoggedIn && (
                        <section className="room-booking">
                            <h2 className="room-booking__title">
                                Бронирование
                            </h2>
                            <div className="room-booking__booking-block">
                                <Booking {...room} />
                            </div>
                        </section>
                    )}
                    <section className="room-reviews">
                        <h2 className="room-section-title">
                            Отзывы посетителей данного отеля
                        </h2>
                        <div className="room-reviews__comments">
                            <RoomReviews />
                        </div>
                        {isLoggedIn && (
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
