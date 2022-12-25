import React from "react";
import PropTypes from "prop-types";
import Skeleton from "../../../common/Skeleton";
import _ from "lodash";

const RoomsListLoading = ({ pageSize }) => {
    const array = _.range(0, pageSize - 1);
    return (
        <>
            <div className="container rooms-list">
                {array.map((item) => (
                    <div className="rooms-card-loading" key={item}>
                        <div className="rooms-card-loading__first-section">
                            <div className="rooms-card-loading__img">
                                <Skeleton
                                    variant="text"
                                    animation="wave"
                                    height={391}
                                    width={391}
                                />
                            </div>
                            <div className="rooms-card-loading__first-section_text">
                                <Skeleton
                                    variant="text"
                                    animation="wave"
                                    height={50}
                                    width={391}
                                />
                                <Skeleton
                                    variant="text"
                                    animation="wave"
                                    height={140}
                                    width={391}
                                />
                            </div>
                        </div>
                        <div className="rooms-card-loading__second-section">
                            <Skeleton
                                variant="text"
                                animation="wave"
                                height={50}
                                width={90}
                            />
                            <Skeleton
                                variant="text"
                                animation="wave"
                                height={100}
                                width={120}
                            />
                            <Skeleton
                                variant="text"
                                animation="wave"
                                height={60}
                                width={140}
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
