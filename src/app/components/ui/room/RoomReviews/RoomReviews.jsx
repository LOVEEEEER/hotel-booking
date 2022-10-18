import React, { useState, useEffect } from "react";
import { useComments } from "../../../../hooks/useComments";
import Rating from "../../../common/Rating";
import TextSlider from "../../../common/TextSlider";
import userService from "../../../../services/user.service";

const RoomReviews = () => {
    const [users, setUsers] = useState();
    const { comments } = useComments();

    useEffect(() => {
        getUsers();
    }, []);

    async function getUsers() {
        const { content } = await userService.fetchAll();
        console.log(content);
        setUsers(content);
        return content;
    }

    const getUserById = (id) => {
        return users.find((user) => user.id === id);
    };

    if (comments && users) {
        return (
            <ul className="room-reviews__list">
                <TextSlider>
                    {comments.map((item) => (
                        <li key={item.id} className="room-reviews__item">
                            <div className="room-reviews__user">
                                <h3 className="room-reviews__author">
                                    {getUserById(item.userId).name}
                                </h3>
                                <Rating readOnly value={item.rate} />
                            </div>
                            <p className="room-reviews__description">
                                {item.text.toString()}
                            </p>
                        </li>
                    ))}
                </TextSlider>
            </ul>
        );
    }
};

export default RoomReviews;
