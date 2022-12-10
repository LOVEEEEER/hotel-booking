import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComments, loadComments } from "../../../../store/slices/comments";
import { useDispatch, useSelector } from "react-redux";
import RoomReview from "../RoomReview/RoomReview";
import { usePaginate } from "../../../../hooks/usePaginate";
import Pagination from "../../../common/Pagination";
import { useSort } from "../../../../hooks/useSort";

const RoomReviewsList = ({ ...rest }) => {
    const dispatch = useDispatch();
    const { roomId } = useParams();
    const comments = useSelector(getComments());
    const pageSize = 3;
    const { sortedItems } = useSort(comments, "created_at", "desc");
    const { itemsCrop, handlePageChange, currentPage } = usePaginate(
        sortedItems || [],
        pageSize
    );

    useEffect(() => {
        dispatch(loadComments(roomId));
    }, []);

    if (comments) {
        return (
            <div className="room-reviews__block">
                {comments.length > 0 ? (
                    <ul className="room-reviews__list">
                        {itemsCrop.map((item) => (
                            <li className="room-reviews__item" key={item._id}>
                                <RoomReview review={item} {...rest} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    "Список отзывов пуст"
                )}
                <Pagination
                    currentPage={currentPage}
                    onChange={handlePageChange}
                    itemsCount={comments.length}
                    pageSize={pageSize}
                />
            </div>
        );
    }
};

export default RoomReviewsList;
