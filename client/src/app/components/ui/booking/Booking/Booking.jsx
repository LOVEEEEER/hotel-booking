import React from "react";
import { useSelector } from "react-redux";
import { getBookingById } from "../../../../store/slices/booking";
import { useDialog } from "../../../../hooks/useDialog";
import { getCurrentUser } from "../../../../store/slices/users";
import SuccessWindow from "../../windows/SuccessWindow/SuccessWindow";
import BookingForm from "../../forms/BookingForm";
import "./scss/booking.scss";

const Booking = ({ ...rest }) => {
    const currentUser = useSelector(getCurrentUser());
    const currentBooking = useSelector(getBookingById({ ...currentUser }));
    const { open: openDialog, handleClickOpen, handleClose } = useDialog();
    return (
        <>
            <BookingForm onOpenDialog={handleClickOpen} {...rest} />
            {openDialog && (
                <SuccessWindow
                    currentBooking={currentBooking}
                    open={openDialog}
                    onClose={handleClose}
                />
            )}
        </>
    );
};

export default Booking;
