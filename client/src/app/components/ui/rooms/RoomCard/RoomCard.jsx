import React from "react";
import PropTypes from "prop-types";
import Rating from "@mui/material/Rating";
import Button from "../../../common/Button";
import ImageSlider from "../../../common/ImageSlider";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFavorite } from "../../../../store/slices/favorites";

const RoomCard = ({ room, isAdmin, onEditRoom, forFavorites }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleToggleHotelPage = () => {
        navigate(`/rooms/${room._id}`);
    };
    const handleRemoveFavorite = () => {
        dispatch(removeFavorite(room._id));
    };
    return (
        <>
            <div className="room">
                <div className="room__main-content_wrapper">
                    <div className="room__swiper-slider">
                        <ImageSlider
                            items={room.images}
                            pagination={false}
                            className="room__image"
                        />
                    </div>

                    <div className="room__main-content_text-wrapper">
                        <h2 className="room__name">№{room.title}</h2>
                        <p className="room__description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Ex sapiente blanditiis perspiciatis, excepturi
                            deserunt nisi, temporibus enim aperiam voluptatum
                            tenetur, dicta delectus libero unde aliquid adipisci
                            accusantium consequatur dolorem incidunt.
                        </p>
                    </div>
                </div>
                <div className="room__more-wrapper">
                    <Rating value={room.rate} readOnly />
                    <p className="room__price">
                        Цена от <br /> <span>{room.price} руб</span> <br /> за
                        ночь
                    </p>
                    <Button
                        variant="outlined"
                        onClick={
                            isAdmin
                                ? () => onEditRoom(room)
                                : forFavorites
                                ? () => handleRemoveFavorite()
                                : () => handleToggleHotelPage()
                        }
                    >
                        {isAdmin
                            ? "Редактировать"
                            : forFavorites
                            ? "Удалить из избранного"
                            : "Подробнее об отеле"}
                    </Button>
                </div>
            </div>
        </>
    );
};

RoomCard.propTypes = {
    room: PropTypes.object.isRequired,
    isAdmin: PropTypes.bool,
    onEditRoom: PropTypes.func,
    forFavorites: PropTypes.bool.isRequired
};

export default RoomCard;
