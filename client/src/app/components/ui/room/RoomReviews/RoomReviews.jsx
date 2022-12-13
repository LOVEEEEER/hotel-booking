import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getIsLoggedIn } from "../../../../store/slices/users";
import ReviewsForm from "../../forms/ReviewsForm";
import RoomReviewsList from "../RoomReviewsList";
import RoomStatisticsBar from "../RoomStatisticsBar";

const RoomReviews = () => {
    const [answerOn, setAnswerOn] = useState();
    const isLoggedIn = useSelector(getIsLoggedIn());

    const handleAnswerOn = (userId) => {
        setAnswerOn(userId);
    };

    return (
        <div className="room-reviews__feedback">
            <div>
                {isLoggedIn ? (
                    <div className="room-reviews__form">
                        <ReviewsForm answerOn={answerOn} />
                    </div>
                ) : (
                    <p className="room-reviews__auth-error">
                        Для того чтобы оставлять отзывы необходимо{" "}
                        <Link
                            to="/login/signin"
                            className="room-reviews__auth-error_link"
                        >
                            войти в аккаунт
                        </Link>
                    </p>
                )}
                <div className="room-reviews__comments">
                    <RoomReviewsList
                        answerOn={answerOn}
                        onAnswer={handleAnswerOn}
                    />
                </div>
            </div>
            <div className="room-reviews__statistics">
                <h2 className="room-reviews__statistics-title">
                    Статистика по отзывам
                </h2>
                <RoomStatisticsBar />
            </div>
        </div>
    );
};

export default RoomReviews;
