import React from "react";
import Rating from "../../../common/Rating";
import TextSlider from "../../../common/TextSlider";

const RoomReviews = () => {
    const comments = [
        {
            name: "Nikita Demyanenko",
            id: 1,
            rate: 4,
            comment:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem pariatur voluptate ullam eligendi eum minus maxime tempora omnis perspiciatis, nemo blanditiis commodi laboriosam! Laborum deserunt velit quis nulla expedita aperiam!"
        },
        {
            name: "Nikita Demyanenko",
            id: 2,
            rate: 5,
            comment:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem pariatur voluptate ullam eligendi eum minus maxime tempora omnis perspiciatis, nemo blanditiis commodi laboriosam! Laborum deserunt velit quis nulla expedita aperiam!"
        },
        {
            name: "Nikita Demyanenko",
            id: 3,
            rate: 3,
            comment:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem pariatur voluptate ullam eligendi eum minus maxime tempora omnis perspiciatis, nemo blanditiis commodi laboriosam! Laborum deserunt velit quis nulla expedita aperiam!"
        },
        {
            name: "Nikita Demyanenko",
            id: 4,
            rate: 5,
            comment:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem pariatur voluptate ullam eligendi eum minus maxime tempora omnis perspiciatis, nemo blanditiis commodi laboriosam! Laborum deserunt velit quis nulla expedita aperiam!"
        },
        {
            name: "Nikita Demyanenko",
            id: 5,
            rate: 3,
            comment:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem pariatur voluptate ullam eligendi eum minus maxime tempora omnis perspiciatis, nemo blanditiis commodi laboriosam! Laborum deserunt velit quis nulla expedita aperiam!"
        },
        {
            name: "Nikita Demyanenko",
            id: 6,
            rate: 5,
            comment:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem pariatur voluptate ullam eligendi eum minus maxime tempora omnis perspiciatis, nemo blanditiis commodi laboriosam! Laborum deserunt velit quis nulla expedita aperiam!"
        },
        {
            name: "Nikita Demyanenko",
            id: 7,
            rate: 2,
            comment:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem pariatur voluptate ullam eligendi eum minus maxime tempora omnis perspiciatis, nemo blanditiis commodi laboriosam! Laborum deserunt velit quis nulla expedita aperiam!"
        }
    ];
    return (
        <ul className="room-reviews__list">
            <TextSlider>
                {comments.map((item) => (
                    <li key={item.id} className="room-reviews__item">
                        <div className="room-reviews__user">
                            <h3 className="room-reviews__author">
                                {item.name}
                            </h3>
                            <Rating readOnly value={item.rate} />
                        </div>
                        <p className="room-reviews__description">
                            {item.comment}
                        </p>
                    </li>
                ))}
            </TextSlider>
        </ul>
    );
};

export default RoomReviews;
