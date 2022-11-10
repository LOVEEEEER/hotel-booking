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
            state.isLoading = false;
        },
        commentsLoadFailed(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
        commentCreatedRequestFailed(state, action) {
            state.error = action.payload;
        },
        commentCreated(state, action) {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        }
    }
});

const { reducer: commentsReducer, actions } = commentsSlice;
const {
    commentsRequested,
    commentsReceived,
    commentsLoadFailed,
    commentCreated,
    commentCreatedRequestFailed
} = actions;

export const loadComments = (pageId) => async (dispatch, getState) => {
    dispatch(commentsRequested());
    try {
        const { content } = await commentsService.get(pageId);
        dispatch(commentsReceived(content));
    } catch (error) {
        dispatch(commentsLoadFailed(error.message));
    }
};

export const createComment = (comment) => async (dispatch) => {
    try {
        await commentsService.create(comment.id, comment);
        dispatch(commentCreated(comment));
    } catch (error) {
        dispatch(commentCreatedRequestFailed(error.message));
    }
};

export const getComments = () => (state) => state.comments.entities;

export default commentsReducer;
