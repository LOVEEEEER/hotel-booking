import React from "react";
import PropTypes from "prop-types";
import Dialog from "../../../../common/Dialog";
import { useSelector } from "react-redux";
import { getRoomById } from "../../../../../store/rooms";
import { displayDate } from "../../../../../utils/dateService";
import Button from "../../../../common/Button";
import { useNavigate } from "react-router-dom";

const SuccessWindow = ({ info, ...rest }) => {
    const navigate = useNavigate();
    const bookedRoom = useSelector(getRoomById(info.room));
    return (
        <Dialog {...rest}>
            <div className="room-booking__dialog">
                <h3 className="room-booking__dialog-title">
                    Номер успешно забронирован
                </h3>
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
                            Выезд: {displayDate(info.departure)}
                        </span>
                    </li>
                </ul>
                <Button
                    onClick={() => navigate("/booking")}
                    sx={{ marginTop: "20px" }}
                >
                    Перейти к моим бронированиям
                </Button>
            </div>
        </Dialog>
    );
};

SuccessWindow.propTypes = {
    info: PropTypes.object.isRequired
};

export default SuccessWindow;
