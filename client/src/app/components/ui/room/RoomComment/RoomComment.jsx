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

const RoomComment = ({ comment, onAnswer }) => {
    const [fullContent, setFullContent] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn());
    const currentUser = useSelector(getCurrentUser());
    const authorComment = useSelector(getUserById(comment.userId));
    const answeredUser = useSelector(getUserById(comment.answerOn));

    const commentRemove = (commentId) => {
        dispatch(removeComment(commentId));
    };

    const handleFullContent = () => {
        setFullContent((prevState) => !prevState);
    };

    const getCommentText = (text) => {
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
            <div className="room-comments__comment">
                <div className="room-comments__user-info">
                    <div className="room-comments__user-info_first">
                        <Avatar image={authorComment.image} />
                        <div className="room-comments__user-info_text">
                            <span
                                className="room-comments__user-name"
                                onClick={() =>
                                    navigate(`/users/${authorComment._id}`)
                                }
                            >
                                {authorComment.name}
                            </span>
                            {isLoggedIn &&
                                currentUser?._id !== authorComment._id && (
                                    <span
                                        className="room-comments__answer-text"
                                        onClick={() =>
                                            onAnswer(authorComment._id)
                                        }
                                    >
                                        ответить
                                    </span>
                                )}
                            {answeredUser && (
                                <p className="room-comments__user-answer">
                                    Ответ пользователю: {answeredUser.name}
                                </p>
                            )}
                            <Rating value={comment.rate} readOnly />
                        </div>
                    </div>
                    <div className="room-comments__user-info_second">
                        <span className="room-comments__user-created">
                            {displayDate(comment.created_at)}
                        </span>

                        {currentUser?._id === authorComment._id ||
                            (currentUser.isAdmin && (
                                <img
                                    src={removeIcon}
                                    alt="remove"
                                    className="room-comments__icon"
                                    onClick={() => commentRemove(comment._id)}
                                />
                            ))}
                    </div>
                </div>
                <div className="room-comments__content">
                    <p className="room-comments__description">
                        {getCommentText(comment.text)}{" "}
                        {comment.text.length > 80 && (
                            <span
                                className="room-comments__control-text"
                                onClick={handleFullContent}
                            >
                                {getContentControlText(comment.text)}
                            </span>
                        )}
                    </p>
                </div>
            </div>
        );
    }
};

RoomComment.propTypes = {
    comment: PropTypes.object.isRequired,
    answerOn: PropTypes.string,
    onAnswer: PropTypes.func
};

export default RoomComment;
