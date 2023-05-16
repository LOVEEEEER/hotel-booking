import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Comment } from "../../../../types/types";
import CreateCommentForm from "../../forms/CreateCommentForm";
import RoomCommentsList from "../RoomCommentsList/RoomCommentsList";
import RoomStatisticsBar from "../RoomStatisticsBar";
import { getIsLoggedIn } from "../../../../store/users/usersSelectors";

type RoomCommentsProps = {
    comments: Comment[];
};

const RoomComments: React.FC<RoomCommentsProps> = ({ ...rest }) => {
    const [answerOn, setAnswerOn] = useState<string>();
    const isLoggedIn = useSelector(getIsLoggedIn());

    const handleAnswerOn = (userId: string) => {
        setAnswerOn(userId);
    };

    return (
        <div className="room-comments__feedback">
            <div>
                {isLoggedIn ? (
                    <div className="room-comments__form">
                        <CreateCommentForm {...{ answerOn }} />
                    </div>
                ) : (
                    <p className="room-comments__auth-error">
                        Для того чтобы оставлять отзывы необходимо{" "}
                        <Link
                            to="/login/signin"
                            className="room-comments__auth-error_link"
                        >
                            войти в аккаунт
                        </Link>
                    </p>
                )}
                <div className="room-comments__comments">
                    <RoomCommentsList onAnswer={handleAnswerOn} {...rest} />
                </div>
            </div>
            <div className="room-comments__statistics">
                <h2 className="room-comments__statistics-title">
                    Статистика по отзывам
                </h2>
                <RoomStatisticsBar />
            </div>
        </div>
    );
};

export default RoomComments;
