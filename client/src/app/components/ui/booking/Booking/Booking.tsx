import React from "react";
import { useSelector } from "react-redux";
import useDialog from "../../../../hooks/useDialog";
import { Room } from "../../../../types/types";
import SuccessBookingDialog from "../../dialogs/SuccessBookingDialog";
import BookingForm from "../../forms/BookingForm";
import { getBookingByUserId } from "../../../../store/booking/bookingSelectors";
import { getCurrentUser } from "../../../../store/users/usersSelectors";

type BookingProps = {
    room: Room;
};

const Booking: React.FC<BookingProps> = ({ ...rest }) => {
    const currentUser = useSelector(getCurrentUser())!;
    const currentBooking = useSelector(getBookingByUserId(currentUser._id!));
    const { open: openDialog, handleOpen, handleClose } = useDialog();
    return (
        <>
            <BookingForm onOpenDialog={handleOpen} {...rest} />
            {openDialog && (
                <SuccessBookingDialog
                    currentBooking={currentBooking!}
                    open={openDialog}
                    onClose={handleClose} 
                /> 
            )}
        </>
    );
};


export default Booking;
