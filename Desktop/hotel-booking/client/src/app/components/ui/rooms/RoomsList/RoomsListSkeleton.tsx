import _ from "lodash";
import React from "react";
import Skeleton from "../../../common/Skeleton";

type RoomsListSkeletonProps = {
    pageSize: number;
};

const RoomsListSkeleton: React.FC<RoomsListSkeletonProps> = ({ pageSize }) => {
    const array = _.range(0, pageSize);
    return (
        <>
            {window.screen.width > 768 && (
                <div className="container rooms-list">
                    {array.map((item) => (
                        <div className="rooms-card-loading" key={item}>
                            <div className="rooms-card-loading__first-section">
                                <div className="rooms-card-loading__img">
                                    <Skeleton height={391} width={391} />
                                </div>
                                <div className="rooms-card-loading__first-section_text">
                                    <Skeleton height={50} width={391} />
                                    <Skeleton height={140} width={391} />
                                </div>
                            </div>
                            <div className="rooms-card-loading__second-section">
                                <Skeleton height={50} width={90} />
                                <Skeleton height={100} width={120} />
                                <Skeleton height={60} width={140} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default RoomsListSkeleton;
