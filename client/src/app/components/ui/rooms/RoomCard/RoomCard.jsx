import React from "react";
import PropTypes from "prop-types";
import Rating from "@mui/material/Rating";
import Button from "../../../common/Button";
import ImageSlider from "../../../common/ImageSlider";
import { useNavigate } from "react-router-dom";

const RoomCard = ({ images, title, rate, price, _id }) => {
    const navigate = useNavigate();
    const handleToggleHotelPage = () => {
        navigate(`/rooms/${_id}`);
    };
    return (
        <div className="room">
            <div className="room__main-content_wrapper">
                <div className="room__swiper-slider">
                    <ImageSlider
                        items={images}
                        pagination={false}
                        className="room__image"
                    />
                </div>

                <div className="room__main-content_text-wrapper">
                    <h2 className="room__name">№{title}</h2>
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
                <Rating value={rate} readOnly />
                <p className="room__price">
                    Цена от <br /> <span>{price} руб</span> <br /> за ночь
                </p>
                <Button variant="outlined" onClick={handleToggleHotelPage}>
                    Подробнее об отеле
                </Button>
            </div>
        </div>
    );
};

RoomCard.propTypes = {
    images: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired
};

export default RoomCard;
