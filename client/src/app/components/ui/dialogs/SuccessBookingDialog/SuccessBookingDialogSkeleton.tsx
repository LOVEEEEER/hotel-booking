import React from "react";
import Skeleton from "../../../common/Skeleton";
import Dialog from "../../../common/Dialog";

type SuccessBookingDialogSkeletonProps = {
    open: boolean;
    onClose: () => void;
};

const SuccessBookingDialogSkeleton: React.FC<
    SuccessBookingDialogSkeletonProps
> = ({ ...rest }) => {
    return (
        <Dialog {...rest}>
            <div className="room-booking__dialog">
                <Skeleton
                    height={40}
                    width={380}
                    sx={{ marginBottom: "10px" }}
                />
                <ul className="room-booking__dialog-list">
                    <li className="room-booking__dialog-item">
                        <Skeleton height={35} width={150} />
                    </li>
                    <li className="room-booking__dialog-item">
                        <Skeleton height={35} width={150} />
                    </li>
                    <li className="room-booking__dialog-item">
                        <Skeleton height={35} width={150} />
                    </li>
                    <li className="room-booking__dialog-item">
                        <Skeleton height={35} width={150} />
                    </li>
                </ul>
                {/* <Button
                    onClick={() => navigate("/booking")}
                    sx={{ marginTop: "20px" }}
                >
                    Перейти к моим бронированиям
                </Button> */}
                <Skeleton height={50} width={380} />
            </div>
        </Dialog>
    );
};

export default SuccessBookingDialogSkeleton;
