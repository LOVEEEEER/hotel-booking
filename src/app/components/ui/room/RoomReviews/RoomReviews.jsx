import React, { useState, useEffect } from "react";
import Rating from "../../../common/Rating";
import TextSlider from "../../../common/TextSlider";
import userService from "../../../../services/user.service";
import { useHistory, useParams } from "react-router-dom";
import { getComments, loadComments } from "../../../../store/comments";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

const RoomReviews = () => {
    const [users, setUsers] = useState();
    const dispatch = useDispatch();
    const { roomId } = useParams();
    const history = useHistory();
    const comments = useSelector(getComments());

    useEffect(() => {
        dispatch(loadComments(roomId));
        getUsers();
    }, []);

    async function getUsers() {
        const { content } = await userService.fetchAll();
        setUsers(content);
        return content;
    }

    const getUserById = (id) => {
        return users.find((user) => user.id === id);
    };

    const toggleUserProfile = (userId) => {
        history.push(`/users/${userId}`);
    };

    if (comments && users) {
        const sortedComments = _.orderBy(comments, ["created_at"], ["desc"]);
        return (
            <ul className="room-reviews__list">
                <TextSlider>
                    {sortedComments.map((item) => (
                        <li key={item.id} className="room-reviews__item">
                            <div className="room-reviews__user">
                                <h3
                                    onClick={() =>
                                        toggleUserProfile(item.userId)
                                    }
                                    className="room-reviews__author"
                                >
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
