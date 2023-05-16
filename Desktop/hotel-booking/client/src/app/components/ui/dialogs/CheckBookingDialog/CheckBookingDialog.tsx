import React from "react";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";
import { Booking } from "../../../../types/types";
import { getFormatDate } from "../../../../utils/dateService";
import Dialog from "../../../common/Dialog";
import Divider from "../../../common/Divider";
import Logo from "../../../common/Logo";
import { getRoomById } from "../../../../store/rooms/roomsSelectors";

type CheckBookingDialogProps = {
    booking: Booking;
    open: boolean;
    onClose: () => void;
};

const CheckBookingDialog: React.FC<CheckBookingDialogProps> = ({
    booking,
    ...rest
}) => {
    const bookedRoom = useSelector(getRoomById(booking.roomId))!;
    return (
        <Dialog {...rest}>
            <div className="booking__dialog">
                <div className="booking__dialog-success_block">
                    <QRCode
                        value={"Номер бронирования " + booking._id}
                        size={180}
                    />
                </div>
                <ul className="booking__dialog-list">
                    <li className="booking__dialog-item">
                        <span className="booking__dialog-info">
                            Номер: {bookedRoom.title}
                        </span>
                    </li>
                    <li className="booking__dialog-item">
                        <span className="booking__dialog-info">
                            Тип номера: {bookedRoom.type}
                        </span>
                    </li>
                    <li className="booking__dialog-item">
                        <span className="booking__dialog-info">
                            Взрослых: {booking.adults}
                        </span>
                    </li>
                    <li className="booking__dialog-item">
                        <span className="booking__dialog-info">
                            Детей: {booking.kids}
                        </span>
                    </li>
                    <li className="booking__dialog-item">
                        <span className="booking__dialog-info">
                            Заезд: {getFormatDate(booking.entry)} в 13:00
                        </span>
                    </li>
                    <li className="booking__dialog-item">
                        <span className="booking__dialog-info">
                            Выезд: {getFormatDate(booking.departure)} в 13:00
                        </span>
                    </li>
                    <li className="booking__dialog-item">
                        <span className="booking__dialog-info">
                            Номер брони: {booking._id}
                        </span>
                    </li>
                </ul>
                <Divider />
                <div className="booking__dialog-second">
                    <h3 className="booking__dialog-price">
                        Итого: {booking.fullPrice} рублей
                    </h3>
                    <Logo />
                </div>
            </div>
        </Dialog>
    );
};

export default CheckBookingDialog;
