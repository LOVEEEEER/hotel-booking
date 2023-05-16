import React from "react";
import Rating from "../../../common/Rating";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../store/createStore";
import { Room } from "../../../../types/types";
import { getAverageRoomRate } from "../../../../utils/getAverageRoomRate";
import Button from "../../../common/Button";
import { getRoomTypeName } from "../../../../utils/getRoomTypeName";
import { getRoomCommentsRates } from "../../../../store/comments/commentsSelectors";
import { removeFavorite } from "../../../../store/favorites/favoritesActions";

type RoomCardProps = {
    room: Room;
    isAdmin?: boolean;
    onEditRoom: (item: Room) => void;
    isFavorites?: boolean;
};

const RoomCard: React.FC<RoomCardProps> = ({
    room,
    isAdmin,
    onEditRoom,
    isFavorites
}) => {
    const dispatch = useAppDispatch();
    const rates = useSelector(getRoomCommentsRates(room._id));
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
                            : isFavorites
                            ? () => handleRemoveFavorite()
                            : () => handleToggleHotelPage()
                    }
                >
                    {isAdmin
                        ? "Редактировать"
                        : isFavorites
                        ? "Удалить из избранного"
                        : "Подробнее об отеле"}
                </Button>
            </div>
        </div>
    );
};

export default RoomCard;
