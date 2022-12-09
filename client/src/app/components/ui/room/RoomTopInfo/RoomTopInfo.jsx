import React from "react";
import PropTypes from "prop-types";
import FavoriteButton from "../../../common/FavoriteButton";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addInFavorites } from "../../../../store/slices/favorites";
import Rating from "../../../common/Rating";
import { getIsLoggedIn } from "../../../../store/slices/users";
import { useParams } from "react-router-dom";

const RoomTopInfo = ({ title, type, rate }) => {
    const { roomId } = useParams();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn());
    const handleSelectFavorite = () => {
        if (isLoggedIn) {
            dispatch(addInFavorites({ roomId }));
        } else {
            toast("Для этого действия войдите в аккаунт");
        }
    };
    return (
        <div className="room-cover__head-content">
            <div className="room-cover__main-content">
                <div className="room-cover__title-wrapper">
                    <FavoriteButton onClick={handleSelectFavorite} />
                    <h1 className="room-cover__title">Отель: {title}</h1>
                </div>
                <p className="room-cover__type">
                    <span className="room-cover__type-text">Тип: </span>
                    {type}
                </p>
            </div>
            <div className="room-cover__rate-block">
                <Rating
                    value={rate}
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
    rate: PropTypes.number.isRequired
};

export default RoomTopInfo;
