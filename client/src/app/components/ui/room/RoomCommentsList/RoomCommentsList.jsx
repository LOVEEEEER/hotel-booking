import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComments, loadComments } from "../../../../store/slices/comments";
import { useDispatch, useSelector } from "react-redux";
import { usePaginate } from "../../../../hooks/usePaginate";
import Pagination from "../../../common/Pagination";
import { useSort } from "../../../../hooks/useSort";
import RoomComment from "../RoomComment/RoomComment";

const RoomCommentsList = ({ ...rest }) => {
    const dispatch = useDispatch();
    const { roomId } = useParams();
    const comments = useSelector(getComments());
    const pageSize = 3;
    const { sortedItems } = useSort(comments, "created_at", "desc");
    const { itemsCrop, handlePageChange, currentPage } = usePaginate(
        sortedItems || [],
        pageSize
    );
    const itemsCount = comments?.length;

    useEffect(() => {
        dispatch(loadComments(roomId));
    }, []);

    if (comments) {
        return (
            <div className="room-comments__block">
                {comments.length > 0 ? (
                    <ul className="room-comments__list">
                        {itemsCrop.map((item) => (
                            <li className="room-comments__item" key={item._id}>
                                <RoomComment comment={item} {...rest} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    "Список отзывов пуст"
                )}
                {itemsCount > pageSize && (
                    <Pagination
                        currentPage={currentPage}
                        onChange={handlePageChange}
                        itemsCount={comments.length}
                        pageSize={pageSize}
                    />
                )}
            </div>
        );
    }
};

export default RoomCommentsList;
