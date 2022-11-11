import React from "react";
import PropTypes from "prop-types";
import { Skeleton } from "@mui/material";
import _ from "lodash";

const RoomsListLoading = ({ pageSize }) => {
    const array = _.range(0, pageSize - 1);
    return (
        <>
            <div className="container rooms-list">
                {array.map((item) => (
                    <div className="room-card-loading" key={item}>
                        <div className="room-card-loading__first-section">
                            <div className="room-card-loading__img">
                                <Skeleton
                                    variant="text"
                                    animation="wave"
                                    height={370}
                                    width={400}
                                />
                            </div>
                            <div className="room-card-loading__first-section_text">
                                <Skeleton
                                    variant="text"
                                    animation="wave"
                                    height={50}
                                    width={400}
                                />
                                <Skeleton
                                    variant="text"
                                    animation="wave"
                                    height={140}
                                    width={400}
                                />
                            </div>
                        </div>
                        <div className="room-card-loading__second-section">
                            <Skeleton
                                variant="text"
                                animation="wave"
                                height={50}
                                width={100}
                            />
                            <Skeleton
                                variant="text"
                                animation="wave"
                                height={100}
                                width={130}
                            />
                            <Skeleton
                                variant="text"
                                animation="wave"
                                height={60}
                                width={150}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

RoomsListLoading.propTypes = {
    pageSize: PropTypes.number.isRequired
};

export default RoomsListLoading;
