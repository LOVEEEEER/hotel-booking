import React from "react";
import PropTypes from "prop-types";
import Rating from "@mui/material/Rating";
import Button from "../../../common/Button";
import ImageSlider from "../../../common/ImageSlider";
import { useNavigate } from "react-router-dom";
import { useDialog } from "../../../../hooks/useDialog";
import EditRoomWindow from "../../dialogs/EditRoomWindow/EditRoomWindow";

const RoomCard = ({ room, isAdmin }) => {
    const { open, handleClickOpen, handleClose } = useDialog();
    const navigate = useNavigate();
    const handleToggleHotelPage = () => {
        navigate(`/rooms/${room._id}`);
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
                                ? () => handleClickOpen()
                                : () => handleToggleHotelPage()
                        }
                    >
                        {isAdmin ? "Редактировать" : "Подробнее об отеле"}
                    </Button>
                </div>
            </div>
            <div className="room__dialog">
                <EditRoomWindow room={room} open={open} onClose={handleClose} />
            </div>
        </>
    );
};

RoomCard.propTypes = {
    room: PropTypes.object.isRequired,
    isAdmin: PropTypes.bool
};

export default RoomCard;
