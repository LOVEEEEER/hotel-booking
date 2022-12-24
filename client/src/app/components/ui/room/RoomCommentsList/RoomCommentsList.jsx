import React from "react";
import PropTypes from "prop-types";
import { usePaginate } from "../../../../hooks/usePaginate";
import Pagination from "../../../common/Pagination";
import { useSort } from "../../../../hooks/useSort";
import RoomComment from "../RoomComment/RoomComment";

const RoomCommentsList = ({ comments, ...rest }) => {
    const pageSize = 3;
    const { sortedItems } = useSort(comments, "created_at", "desc");
    const { itemsCrop, handlePageChange, currentPage } = usePaginate(
        sortedItems || [],
        pageSize
    );
    const itemsCount = comments?.length;

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
};

RoomCommentsList.propTypes = {
    comments: PropTypes.array.isRequired
};

export default RoomCommentsList;
