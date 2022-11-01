import { createSlice } from "@reduxjs/toolkit";
import commentsService from "../services/comments.service";

const initialState = {
    entities: null,
    error: null,
    isLoading: true
};

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        commentsRequested(state, action) {
            state.isLoading = true;
        },
        commentsReceived(state, action) {
            state.entities = action.payload;
        },
        commentsLoadFailed(state, action) {
            state.error = action.payload;
        }
    }
});

const { reducer: commentsReducer, actions } = commentsSlice;
const { commentsRequested, commentsReceived, commentsLoadFailed } = actions;

export const loadComments = (pageId) => async (dispatch, getState) => {
    dispatch(commentsRequested());
    try {
        const { content } = await commentsService.get(pageId);
        dispatch(commentsReceived(content));
    } catch (error) {
        dispatch(commentsLoadFailed(error.message));
    }
};

export default commentsReducer;
