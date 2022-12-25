import React from "react";
import { Skeleton } from "@mui/material";
import Dialog from "../../../common/Dialog";

const SuccessWindowLoading = ({ ...rest }) => {
    return (
        <Dialog {...rest}>
            <div className="room-booking__dialog">
                <Skeleton
                    variant="text"
                    animation="wave"
                    height={40}
                    width={380}
                    sx={{ marginBottom: "10px" }}
                />
                <ul className="room-booking__dialog-list">
                    <li className="room-booking__dialog-item">
                        <Skeleton
                            variant="text"
                            animation="wave"
                            height={35}
                            width={150}
                        />
                    </li>
                    <li className="room-booking__dialog-item">
                        <Skeleton
                            variant="text"
                            animation="wave"
                            height={35}
                            width={150}
                        />
                    </li>
                    <li className="room-booking__dialog-item">
                        <Skeleton
                            variant="text"
                            animation="wave"
                            height={35}
                            width={150}
                        />
                    </li>
                    <li className="room-booking__dialog-item">
                        <Skeleton
                            variant="text"
                            animation="wave"
                            height={35}
                            width={150}
                        />
                    </li>
                </ul>
                {/* <Button
                    onClick={() => navigate("/booking")}
                    sx={{ marginTop: "20px" }}
                >
                    Перейти к моим бронированиям
                </Button> */}
                <Skeleton
                    variant="text"
                    animation="wave"
                    height={50}
                    width={380}
                />
            </div>
        </Dialog>
    );
};

export default SuccessWindowLoading;
