import React from "react";
import PropTypes from "prop-types";
import Rating from "../../../common/Rating";
import Avatar from "../../../common/Avatar";
import { useSelector } from "react-redux";
import { getUserById } from "../../../../store/slices/users";
import { displayDate } from "../../../../utils/dateService";
// import deleteIcon from "../../../../assets/svg/delete.svg";

const RoomReview = ({ review, onToggleUserProfile }) => {
    const authorComment = useSelector(getUserById(review.userId));
    if (authorComment) {
        return (
            <li key={review.id} className="room-reviews__item">
                <div className="room-reviews__user">
                    <Avatar
                        image={authorComment.image}
                        sx={{ marginRight: "13px" }}
                    />
                    <div className="room-reviews__user-text_block">
                        <h3
                            onClick={() => onToggleUserProfile(review.userId)}
                            className="room-reviews__author"
                        >
                            {authorComment.name}
                        </h3>
                        <Rating readOnly value={review.rate} />
                    </div>
                    <span className="room-reviews__created">
                        {displayDate(review.created_at)}
                    </span>
                </div>

                <p className="room-reviews__description">
                    {review.text.toString()}
                </p>
            </li>
        );
    }
};

RoomReview.propTypes = {
    review: PropTypes.object.isRequired,
    onToggleUserProfile: PropTypes.func.isRequired
};

export default RoomReview;
