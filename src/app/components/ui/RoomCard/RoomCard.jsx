import React from "react";
import Rating from "@mui/material/Rating";
import { useHistory } from "react-router-dom";
import Button from "../../common/Button";

const RoomCard = ({ images, type, title, rate, price, id }) => {
  const history = useHistory();
  const handleToggleHotelPage = () => {
    history.push(`/rooms/${id}`);
  };
  return (
    <div className="room">
      <div className="room__main-content_wrapper">
        <img src={images[0]} alt={type} className="room__image" />

        <div className="room__main-content_text-wrapper">
          <h2 className="room__name">{title}</h2>
          <p className="room__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
            sapiente blanditiis perspiciatis, excepturi deserunt nisi,
            temporibus enim aperiam voluptatum tenetur, dicta delectus libero
            unde aliquid adipisci accusantium consequatur dolorem incidunt.
          </p>
        </div>
      </div>
      <div className="room__more-wrapper">
        <Rating value={rate} readOnly />
        <p className="room__price">
          Цена от <br /> <span>{price} руб</span> <br /> за ночь
        </p>
        <Button
          variant="outlined"
          onClick={handleToggleHotelPage}
          label="Подробнее об отеле"
        />
      </div>
    </div>
  );
};

export default RoomCard;
