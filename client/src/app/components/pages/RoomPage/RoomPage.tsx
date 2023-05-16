import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ImageSlider from "../../common/ImageSlider";
import Booking from "../../ui/booking/Booking";
import RoomBreakfastList from "../../ui/room/RoomBreakfastList";
import RoomComfortList from "../../ui/room/RoomComfortList";
import RoomComments from "../../ui/room/RoomComments";
import RoomPlacementCard from "../../ui/room/RoomPlacementCard";
import RoomReasonsChoosing from "../../ui/room/RoomReasonsChoosing";
import RoomTopInfo from "../../ui/room/RoomTopInfo";
import { getRoomById } from "../../../store/rooms/roomsSelectors";
import { getRoomComments } from "../../../store/comments/commentsSelectors";
import {
    getIsLoggedIn,
    getUsersLoadingStatus
} from "../../../store/users/usersSelectors";

const RoomPage: React.FC = () => {
    const { roomId } = useParams();
    const room = useSelector(getRoomById(roomId!));
    const comments = useSelector(getRoomComments(roomId!))!;
    const isLoggedIn = useSelector(getIsLoggedIn());
    const usersLoading = useSelector(getUsersLoadingStatus());

    if (room && comments) {
        return (
            <>
                <main className="room__page">
                    <section className="room-cover">
                        <RoomTopInfo {...{ room }} />
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
                        <RoomReasonsChoosing />
                    </section>
                    <section className="room-comfort">
                        {" "}
                        <h2 className="room-section-title">
                            Преимущества этого варианта
                        </h2>
                        <div className="room-comfort__block">
                            <div className="room-comfort__item">
                                <RoomComfortList {...{ room }} />
                            </div>
                            <div className="room-comfort__item">
                                <RoomBreakfastList breakfast={room.breakfast} />
                            </div>
                            <div className="room-comfort__item">
                                <RoomPlacementCard />
                            </div>
                        </div>
                    </section>
                    {isLoggedIn && !usersLoading && (
                        <section className="room-booking">
                            <h2 className="room-booking__title">
                                Бронирование
                            </h2>
                            <div className="room-booking__booking-block">
                                <Booking {...{ room }} />
                            </div>
                        </section>
                    )}
                    <section className="room-comments">
                        <h2 className="room-section-title">
                            Отзывы посетителей данного отеля
                        </h2>
                        <RoomComments comments={comments} />
                    </section>
                </main>
            </>
        );
    }
    return <></>;
};

export default RoomPage;
