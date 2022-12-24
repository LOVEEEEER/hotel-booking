import React from "react";
import PropTypes from "prop-types";
import Button from "../../../common/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../../../../store/slices/favorites";
import { getRoomTypeName } from "../../../../utils/getRoomTypeName";
import Rating from "../../../common/Rating";
import { getAverageRoomRate } from "../../../../utils/getAverageRoomRate";
import { getRoomRates } from "../../../../store/slices/comments";

const RoomCard = ({ room, isAdmin, onEditRoom, forFavorites }) => {
    const dispatch = useDispatch();
    const rates = useSelector(getRoomRates(room._id));
    const navigate = useNavigate();
    const handleToggleHotelPage = () => {
        navigate(`/rooms/${room._id}`);
    };
    const handleRemoveFavorite = () => {
        dispatch(removeFavorite(room._id));
    };
    return (
        <div className="room">
            <div className="room__head-info">
                <img
                    src={room.images[0]}
                    alt="room-image"
                    className="room__image"
                />
                <div className="room__main-content_text-wrapper">
                    <h2 className="room__name">№{room.title}</h2>
                    <Rating
                        value={rates ? getAverageRoomRate(rates) : 0}
                        readOnly
                    />
                    <p className="room__description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Maiores sapiente ipsa sunt veritatis rerum in.
                    </p>
                </div>
            </div>
            <div className="room__more-wrapper">
                <span className="room__type">{getRoomTypeName(room.type)}</span>
                <p className="room__price">
                    Цена от <br /> <span>{room.price} руб</span> <br /> за ночь
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
    );
};

RoomCard.propTypes = {
    room: PropTypes.object.isRequired,
    isAdmin: PropTypes.bool,
    onEditRoom: PropTypes.func,
    forFavorites: PropTypes.bool
};

export default RoomCard;
