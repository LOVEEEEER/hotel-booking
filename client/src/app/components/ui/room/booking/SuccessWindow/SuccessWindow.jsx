import React from "react";
import PropTypes from "prop-types";
import Dialog from "../../../../common/Dialog";
import successIcon from "../../../../../assets/svg/success.svg";
import { useSelector } from "react-redux";
import { getRoomById } from "../../../../../store/slices/rooms";
import { displayDate } from "../../../../../utils/dateService";
import Button from "../../../../common/Button";
import { useNavigate } from "react-router-dom";
import Divider from "../../../../common/Divider";

const SuccessWindow = ({ info, ...rest }) => {
    const navigate = useNavigate();
    const bookedRoom = useSelector(getRoomById(info.room));
    return (
        <Dialog {...rest}>
            <div className="room-booking__dialog">
                <div className="room-booking__dialog-success_block">
                    <h3 className="room-booking__dialog-title">
                        Номер успешно забронирован
                    </h3>
                    <img
                        src={successIcon}
                        alt="success"
                        className="room-booking__dialog-success"
                    />
                </div>
                <ul className="room-booking__dialog-list">
                    <li className="room-booking__dialog-item">
                        <span className="room-booking__dialog-info">
                            Номер: {bookedRoom.title}
                        </span>
                    </li>
                    <li className="room-booking__dialog-item">
                        <span className="room-booking__dialog-info">
                            Тип номера: {bookedRoom.type}
                        </span>
                    </li>
                    <li className="room-booking__dialog-item">
                        <span className="room-booking__dialog-info">
                            Заезд: {displayDate(info.entry)} в 13:00
                        </span>
                    </li>
                    <li className="room-booking__dialog-item">
                        <span className="room-booking__dialog-info">
                            Выезд: {displayDate(info.departure)} в 13:00
                        </span>
                    </li>
                    <li className="room-booking__dialog-item">
                        <span className="room-booking__dialog-info">
                            Номер брони: {info.id}
                        </span>
                    </li>
                </ul>
                <Divider />
                <h3 className="room-booking__dialog-price">
                    Итого: {info.fullPrice} рублей
                </h3>

                <Button
                    onClick={() => navigate("/booking")}
                    sx={{ marginTop: "5px", marginBottom: "10px" }}
                >
                    Мои бронирования
                </Button>
            </div>
        </Dialog>
    );
};

SuccessWindow.propTypes = {
    info: PropTypes.object.isRequired
};

export default SuccessWindow;
