import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../store/createStore";
import { Comment } from "../../../../types/types";
import Avatar from "../../../common/Avatar";
import removeIcon from "../../../../assets/svg/remove.svg";
import { displayDate } from "../../../../utils/dateService";
import Rating from "../../../common/Rating";
import {
    getCurrentUser,
    getIsLoggedIn,
    getUserById
} from "../../../../store/users/usersSelectors";
import { removeComment } from "../../../../store/comments/commentsActions";

type RoomCommentProps = {
    comment: Comment;
    onAnswer: (id: string) => void;
};

const RoomComment: React.FC<RoomCommentProps> = ({ comment, onAnswer }) => {
    const dispatch = useAppDispatch();
    const [fullContent, setFullContent] = useState<boolean>(false);
    const navigate = useNavigate();
    const isLoggedIn = useSelector(getIsLoggedIn());
    const currentUser = useSelector(getCurrentUser());
    const authorComment = useSelector(getUserById(comment.userId))!;
    const answeredUser = useSelector(getUserById(comment.answerOn));

    const commentRemove = (commentId: Comment["_id"]) => {
        dispatch(removeComment(commentId!));
    };

    const handleFullContent = () => {
        setFullContent((prevState) => !prevState);
    };

    const getCommentText = (text: string) => {
        return text.length >= 80
            ? fullContent
                ? text
                : text.slice(0, 80)
            : text;
    };

    const getContentControlText = (text: string) => {
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
                                            onAnswer(authorComment._id!)
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
                            {displayDate(comment.created_at!)}
                        </span>

                        {currentUser &&
                            currentUser._id === authorComment._id && (
                                <img
                                    src={removeIcon}
                                    alt="remove"
                                    className="room-comments__icon"
                                    onClick={() => commentRemove(comment._id)}
                                />
                            )}
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
    return <></>;
};

export default RoomComment;
