import React from "react";
import { getFormatDate } from "../../../../utils/dateService";
import Button from "../../../common/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Booking, Room } from "../../../../types/types";
import useDialog from "../../../../hooks/useDialog";
import { useAppDispatch } from "../../../../store/createStore";
import CheckBookingDialog from "../../dialogs/CheckBookingDialog";
import { getUserById } from "../../../../store/users/usersSelectors";
import { getRoomById } from "../../../../store/rooms/roomsSelectors";
import { removeBooking } from "../../../../store/booking/bookingActions";

type BookingCardProps = {
    booking: Booking;
    isAdmin?: boolean;
};

const BookingCard: React.FC<BookingCardProps> = ({ booking, isAdmin }) => {
    const dispatch = useAppDispatch();
    const bookingAuthor = useSelector(getUserById(booking.userId));
    const room: Room = useSelector(getRoomById(booking.roomId))!;
    const { open, handleOpen, handleClose } = useDialog();
    const navigate = useNavigate();

    const removeBookingItem = (bookingId: string) => {
        dispatch(removeBooking(bookingId));
    };

    console.log("room", booking);

    if (room && bookingAuthor) {
        return (
            <div className="booking__card">
                <div className="booking__text-block">
                    <ul className="booking__text-list">
                        <li className="booking__text-item">
                            <h3 className="booking__title">Номер брони</h3>
                            <p className="booking__id">{booking._id}</p>
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
                            {getFormatDate(booking.entry)} в 13:00
                        </span>
                    </p>
                    <p className="booking__date-text">
                        <span className="booking__date-title">Выезд:</span>{" "}
                        <span className="booking__date">
                            {getFormatDate(booking.departure)} в 13:00
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
                            onClick={handleOpen}
                        >
                            Показать чек
                        </Button>
                        <Button
                            variant="cancel"
                            sx={{
                                marginBottom: "8px",
                                padding: "5px",
                                fontSize: "11px"
                            }}
                            onClick={() => removeBookingItem(booking._id!)}
                        >
                            Снять бронь
                        </Button>
                    </div>
                </div>
                <CheckBookingDialog
                    {...{ booking, open }}
                    onClose={handleClose}
                />
            </div>
        );
    }
    return <></>;
};

export default BookingCard;
