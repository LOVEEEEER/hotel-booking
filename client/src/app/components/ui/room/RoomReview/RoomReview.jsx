import React, { useState } from "react";
import PropTypes from "prop-types";
import Rating from "../../../common/Rating";
import Avatar from "../../../common/Avatar";
import { useDispatch, useSelector } from "react-redux";
import {
    getCurrentUser,
    getIsLoggedIn,
    getUserById
} from "../../../../store/slices/users";
import { displayDate } from "../../../../utils/dateService";
import removeIcon from "../../../../assets/svg/remove.svg";
import { removeComment } from "../../../../store/slices/comments";
import { useNavigate } from "react-router-dom";

const RoomReview = ({ review, onAnswer }) => {
    const [fullContent, setFullContent] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn());
    const currentUser = useSelector(getCurrentUser());
    const authorComment = useSelector(getUserById(review.userId));
    const answeredUser = useSelector(getUserById(review.answerOn));

    const commentRemove = (commentId) => {
        dispatch(removeComment(commentId));
    };

    const handleFullContent = () => {
        setFullContent((prevState) => !prevState);
    };

    const getReviewText = (text) => {
        return text.length >= 80
            ? fullContent
                ? text
                : text.slice(0, 80)
            : text;
    };

    const getContentControlText = (text) => {
        return fullContent ? "Скрыть" : "Показать полностью";
    };

    if (authorComment) {
        return (
            <div className="room-reviews__review">
                <div className="room-reviews__user-info">
                    <div className="room-reviews__user-info_first">
                        <Avatar image={authorComment.image} />
                        <div className="room-reviews__user-info_text">
                            <span
                                className="room-reviews__user-name"
                                onClick={() =>
                                    navigate(`/users/${authorComment._id}`)
                                }
                            >
                                {authorComment.name}
                            </span>
                            {isLoggedIn &&
                                currentUser?._id !== authorComment._id && (
                                    <span
                                        className="room-reviews__answer-text"
                                        onClick={() =>
                                            onAnswer(authorComment._id)
                                        }
                                    >
                                        ответить
                                    </span>
                                )}
                            {answeredUser && (
                                <p className="room-reviews__user-answer">
                                    Ответ пользователю: {answeredUser.name}
                                </p>
                            )}
                            <Rating value={review.rate} readOnly />
                        </div>
                    </div>
                    <div className="room-reviews__user-info_second">
                        <span className="room-reviews__user-created">
                            {displayDate(review.created_at)}
                        </span>

                        {currentUser?._id === authorComment._id && (
                            <img
                                src={removeIcon}
                                alt="remove"
                                className="room-reviews__icon"
                                onClick={() => commentRemove(review._id)}
                            />
                        )}
                    </div>
                </div>
                <div className="room-reviews__content">
                    <p className="room-reviews__description">
                        {getReviewText(review.text)}{" "}
                        {review.text.length > 80 && (
                            <span
                                className="room-reviews__control-text"
                                onClick={handleFullContent}
                            >
                                {getContentControlText(review.text)}
                            </span>
                        )}
                    </p>
                </div>
            </div>
        );
    }
};

RoomReview.propTypes = {
    review: PropTypes.object.isRequired,
    answerOn: PropTypes.string,
    onAnswer: PropTypes.func
};

export default RoomReview;
