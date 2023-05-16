import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../../../store/createStore";
import { Room } from "../../../../types/types";
import { getAverageRoomRate } from "../../../../utils/getAverageRoomRate";
import { getRoomTypeName } from "../../../../utils/getRoomTypeName";
import FavoriteButton from "../../../common/FavoriteButton";
import Rating from "../../../common/Rating";
import { getIsRoomInFavorites } from "../../../../store/favorites/favoritesSelectors";
import {
    getCurrentUserId,
    getIsLoggedIn
} from "../../../../store/users/usersSelectors";
import {
    createFavorite,
    removeFavorite
} from "../../../../store/favorites/favoritesActions";
import { getRoomCommentsRates } from "../../../../store/comments/commentsSelectors";

type RoomTopInfoProps = {
    room: Room;
};

const RoomTopInfo: React.FC<RoomTopInfoProps> = ({ room }) => {
    const dispatch = useAppDispatch();
    const { roomId } = useParams<{ roomId: string }>();
    const currentUserId = useSelector(getCurrentUserId());
    const rates = useSelector(getRoomCommentsRates(roomId!));
    const isLoggedIn = useSelector(getIsLoggedIn());
    const isFavorite = useSelector(getIsRoomInFavorites(room._id));
    const handleSelectFavorite = () => {
        if (isLoggedIn) {
            if (!isFavorite) {
                dispatch(
                    createFavorite({
                        userId: currentUserId!,
                        roomId: "" || roomId!
                    })
                );
            } else {
                dispatch(removeFavorite(room._id));
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
                    <h1 className="room-cover__title">Отель: {room.title}</h1>
                </div>
                <p className="room-cover__type">
                    <span className="room-cover__type-text">Тип: </span>
                    {getRoomTypeName(room.type)}
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

export default RoomTopInfo;
