import React from "react";
import ImageSlider from "../../common/ImageSlider";
import RoomReasonsChoosingList from "../../ui/room/RoomReasonsChoosing";
import RoomComfortList from "../../ui/room/RoomComfortList";
import RoomBreakFastList from "../../ui/room/RoomBreakfastList";
import Booking from "../../ui/booking/Booking";
import RoomRulesCard from "../../ui/room/RoomRulesCard";
import { useSelector } from "react-redux";
import { getRoomById } from "../../../store/slices/rooms";
import { getIsLoggedIn } from "../../../store/slices/users";
import { useParams } from "react-router-dom";
import RoomTopInfo from "../../ui/room/RoomTopInfo";
import RoomComments from "../../ui/room/RoomComments";

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
                        {" "}
                        <h2 className="room-section-title">
                            Преимущества этого варианта
                        </h2>
                        <div className="room-comfort__block">
                            <div className="room-comfort__item">
                                <RoomComfortList {...room} />
                            </div>
                            <div className="room-comfort__item">
                                <RoomBreakFastList breakfast={room.breakfast} />
                            </div>
                            <div className="room-comfort__item">
                                <RoomRulesCard />
                            </div>
                        </div>
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
                    <section className="room-comments">
                        <h2 className="room-section-title">
                            Отзывы посетителей данного отеля
                        </h2>
                        <RoomComments />
                    </section>
                </main>
            </>
        );
    }
};

export default RoomPage;
