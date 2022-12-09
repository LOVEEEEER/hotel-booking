import React from "react";
import PropTypes from "prop-types";
import QRCode from "react-qr-code";
import { getFormatDate } from "../../../utils/dateService";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";
import CancelWindow from "../CancelWindow";
import { useDialog } from "../../../hooks/useDialog";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserBooking } from "../../../store/slices/booking";
import { getUserById } from "../../../store/slices/users";
import { getRoomById } from "../../../store/slices/rooms";

const BookingCard = ({ item }) => {
    const dispatch = useDispatch();
    const bookingAuthor = useSelector(getUserById(item.userId));
    const room = useSelector(getRoomById(item.roomId));
    const { open, handleClickOpen, handleClose } = useDialog();
    const navigate = useNavigate();
    if (room && bookingAuthor) {
        return (
            <div className="booking__card">
                <div className="booking__qr">
                    <QRCode
                        value={"Номер бронирования " + item._id}
                        size={100}
                    />
                </div>
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
                            variant="cancel"
                            sx={{ padding: "5px", fontSize: "11px" }}
                            onClick={handleClickOpen}
                        >
                            Отменить бронь
                        </Button>
                    </div>
                </div>
                <CancelWindow
                    onCancel={() => dispatch(deleteUserBooking(item._id))}
                    open={open}
                    onClose={handleClose}
                />
            </div>
        );
    }
};

BookingCard.propTypes = {
    item: PropTypes.object.isRequired
};

export default BookingCard;
