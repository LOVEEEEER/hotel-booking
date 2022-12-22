import React from "react";
import { useSelector } from "react-redux";
import { getBookingById } from "../../../../store/slices/booking";
import { useDialog } from "../../../../hooks/useDialog";
import { getCurrentUser } from "../../../../store/slices/users";
import SuccessWindow from "../../dialogs/SuccessWindow/SuccessWindow";
import SuccessWindowLoading from "../../dialogs/SuccessWindow/SuccessWindowLoading";
import BookingForm from "../../forms/BookingForm";

const Booking = ({ ...rest }) => {
    const currentUser = useSelector(getCurrentUser());
    const currentBooking = useSelector(getBookingById({ ...currentUser }));
    const { open: openDialog, handleClickOpen, handleClose } = useDialog();
    return (
        <>
            <BookingForm onOpenDialog={handleClickOpen} {...rest} />
            {openDialog ? (
                !currentBooking ? (
                    <SuccessWindowLoading
                        open={openDialog}
                        onClose={handleClose}
                    />
                ) : (
                    <SuccessWindow
                        currentBooking={currentBooking}
                        open={openDialog}
                        onClose={handleClose}
                    />
                )
            ) : null}
        </>
    );
};

export default Booking;