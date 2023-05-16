import React from "react";
import usePaginate from "../../../../hooks/usePaginate";
import useSort from "../../../../hooks/useSort";
import { Comment } from "../../../../types/types";
import Pagination from "../../../common/Pagination";
import RoomComment from "../RoomComment/RoomComment";

type RoomCommentsListProps = {
    comments: Comment[];
    onAnswer: (id: string) => void;
};

const RoomCommentsList: React.FC<RoomCommentsListProps> = ({
    comments,
    ...rest
}) => {
    const pageSize = 3;
    const { sortedItems } = useSort(comments, "created_at");
    const { itemsCrop, handleChangePage, currentPage } = usePaginate(
        sortedItems,
        pageSize
    );
    const itemsCount = comments.length;
    return (
        <div className="room-comments__block">
            {comments.length > 0 ? (
                <ul className="room-comments__list">
                    {itemsCrop.map((comment) => (
                        <li className="room-comments__item" key={comment._id}>
                            <RoomComment {...{ comment }} {...rest} />
                        </li>
                    ))}
                </ul>
            ) : (
                "Список отзывов пуст"
            )}
            {itemsCount > pageSize && (
                <Pagination
                    onChange={handleChangePage}
                    itemsCount={comments.length}
                    {...{ currentPage, pageSize }}
                />
            )}
        </div>
    );
};

export default RoomCommentsList;
