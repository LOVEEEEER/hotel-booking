import { Room } from "../../types/types";
import { RootState } from "../createStore";

export const getRoomCommentsRates =
    (roomId: Room["_id"]) => (state: RootState) => {
        const roomComments = state.comments.entities.filter(
            (comment) => comment.pageId === roomId
        );
        return roomComments.map((comment) => comment.rate);
    };

export const getRoomComments = (roomId: Room["_id"]) => (state: RootState) => {
    return state.comments.entities.filter(
        (comment) => comment.pageId === roomId
    );
};

export const getCommentsLoadingStatus = () => (state: RootState) => {
    return state.comments.isLoading;
};
