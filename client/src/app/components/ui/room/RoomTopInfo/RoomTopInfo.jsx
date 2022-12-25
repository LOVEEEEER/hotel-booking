import React from "react";
import PropTypes from "prop-types";
import FavoriteButton from "../../../common/FavoriteButton";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
    addInFavorites,
    getIsFavorite,
    removeFavorite
} from "../../../../store/slices/favorites";
import Rating from "../../../common/Rating";
import { getIsLoggedIn } from "../../../../store/slices/users";
import { useParams } from "react-router-dom";
import { getRoomRates } from "../../../../store/slices/comments";
import { getAverageRoomRate } from "../../../../utils/getAverageRoomRate";
import { getRoomTypeName } from "../../../../utils/getRoomTypeName";
import "./scss/room-top-info.scss";

const RoomTopInfo = ({ title, type, rate, _id }) => {
    const { roomId } = useParams();
    const rates = useSelector(getRoomRates(roomId));
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn());
    const isFavorite = useSelector(getIsFavorite(_id));
    const handleSelectFavorite = () => {
        if (isLoggedIn) {
            if (!isFavorite) {
                dispatch(addInFavorites({ roomId }));
            } else {
                dispatch(removeFavorite(_id));
            }
        } else {
            toast("Для этого действия войдите в аккаунт");
        }
    };
    return (
        <div className="room-cover__head-content">
            <div className="room-cover__main-content">
                <div className="room-cover__title-wrapper">
                    <FavoriteButton
                        onClick={handleSelectFavorite}
                        isFavorite={isFavorite}
                    />
                    <h1 className="room-cover__title">Отель: {title}</h1>
                </div>
                <p className="room-cover__type">
                    <span className="room-cover__type-text">Тип: </span>
                    {getRoomTypeName(type)}
                </p>
            </div>
            <div className="room-cover__rate-block">
                <Rating
                    value={getAverageRoomRate(rates)}
                    label="Общий рейтинг"
                    readOnly
                    sx={{
                        color: "rgb(234, 166, 255)",
                        fontSize: "30px"
                    }}
                />
            </div>
        </div>
    );
};

RoomTopInfo.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired
};

export default RoomTopInfo;
