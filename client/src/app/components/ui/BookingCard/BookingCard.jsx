import React from "react";
import PropTypes from "prop-types";
import { getFormatDate } from "../../../utils/dateService";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";
import { useDialog } from "../../../hooks/useDialog";
import { useSelector } from "react-redux";
import { getUserById } from "../../../store/slices/users";
import { getRoomById } from "../../../store/slices/rooms";
import CheckWindow from "../dialogs/CheckWindow";

const BookingCard = ({ item }) => {
    const bookingAuthor = useSelector(getUserById(item.userId));
    const room = useSelector(getRoomById(item.roomId));
    const { open, handleClickOpen, handleClose } = useDialog();
    const navigate = useNavigate();
    if (room && bookingAuthor) {
        return (
            <div className="booking__card">
                <div className="booking__text-block">
                    <ul className="booking__text-list">
                        <li className="booking__text-item">
                            <h3 className="booking__title">Номер брони</h3>
                            <p className="booking__id">{item._id}</p>
                        </li>
                        <li className="booking__text-item">
                            <h3 className="booking__title">Номер</h3>
                            <p className="booking__id">{room.title}</p>
                        </li>
                    </ul>
                </div>
                <div className="booking__cancel-block">
                    <p className="booking__date-text">
                        <span className="booking__date-title">Заезд:</span>{" "}
                        <span className="booking__date">
                            {getFormatDate(item.entry)} в 13:00
                        </span>
                    </p>
                    <p className="booking__date-text">
                        <span className="booking__date-title">Выезд:</span>{" "}
                        <span className="booking__date">
                            {getFormatDate(item.departure)} в 13:00
                        </span>
                    </p>
                    <div className="booking__buttons-block">
                        <Button
                            sx={{
                                marginBottom: "8px",
                                padding: "5px",
                                fontSize: "11px"
                            }}
                            onClick={() => navigate(`/rooms/${room._id}`)}
                        >
                            Страница отеля
                        </Button>
                        <Button
                            sx={{
                                marginBottom: "8px",
                                padding: "5px",
                                fontSize: "11px"
                            }}
                            variant="outlined"
                            onClick={handleClickOpen}
                        >
                            Показать чек
                        </Button>
                    </div>
                </div>
                <CheckWindow open={open} onClose={handleClose} booking={item} />
            </div>
        );
    }
};

BookingCard.propTypes = {
    item: PropTypes.object.isRequired
};

export default BookingCard;
