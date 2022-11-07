import React, { useEffect } from "react";
import TextSlider from "../../../common/TextSlider";
import { useNavigate, useParams } from "react-router-dom";
import { getComments, loadComments } from "../../../../store/comments";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import RoomReview from "../RoomReview/RoomReview";

const RoomReviews = () => {
    const dispatch = useDispatch();
    const { roomId } = useParams();
    const navigate = useNavigate();
    const comments = useSelector(getComments());

    useEffect(() => {
        dispatch(loadComments(roomId));
    }, []);

    const toggleUserProfile = (userId) => {
        navigate(`/users/${userId}`);
    };

    if (comments) {
        const sortedComments = _.orderBy(comments, ["created_at"], ["desc"]);
        return (
            <ul className="room-reviews__list">
                <TextSlider>
                    {sortedComments.map((item) => (
                        <RoomReview
                            onToggleUserProfile={toggleUserProfile}
                            key={item.id}
                            review={item}
                        />
                    ))}
                </TextSlider>
            </ul>
        );
    }
};

export default RoomReviews;
