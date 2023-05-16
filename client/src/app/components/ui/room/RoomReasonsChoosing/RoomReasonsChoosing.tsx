import React from "react";
import reasons from "../../../../constants/reasonsChoosing";

const RoomReasonsChoosing = () => {
    return (
        <>
            <h2 className="room-section-title">Причины выбрать данный отель</h2>
            <ul className="room-reasons__list">
                {reasons.map((item) => (
                    <li className="room-reasons__item" key={item._id}>
                        <div className="room-reasons__card">
                            <div className="room-reasons__card-header">
                                <img
                                    src={item.image}
                                    alt=""
                                    className="room-reasons__card-image"
                                />
                                <h3 className="room-reasons__card-title">
                                    {item.name}
                                </h3>
                            </div>
                            <p className="room-reasons__card-description">
                                {item.description}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default RoomReasonsChoosing;
