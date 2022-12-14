import { createSlice } from "@reduxjs/toolkit";
import commentsService from "../../services/comments.service";

const initialState = {
    entities: null,
    error: null,
    isLoading: true
};

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        requested(state, action) {
            state.isLoading = true;
        },
        requestFailed(state, action) {
            state.error = action.payload;
        },
        received(state, action) {
            state.entities = action.payload;
            state.isLoading = false;
        },
        loadFailed(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
        created(state, action) {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        removed(state, action) {
            state.entities = state.entities.filter(
                (comment) => comment._id !== action.payload
            );
        }
    }
});

const { reducer: commentsReducer, actions } = commentsSlice;
const { requested, received, loadFailed, created, requestFailed, removed } =
    actions;

export const loadComments = () => async (dispatch) => {
    dispatch(requested());
    try {
        const { content } = await commentsService.fetchAll();
        dispatch(received(content));
    } catch (error) {
        dispatch(loadFailed(error.message));
    }
};

export const getRoomComments = (roomId) => (state) => {
    return state.comments.entities
        ? state.comments.entities.filter((comment) => comment.pageId === roomId)
        : null;
};

export const createComment = (comment) => async (dispatch) => {
    try {
        const { content } = await commentsService.create(comment);
        dispatch(created(content));
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export const removeComment = (id) => async (dispatch) => {
    try {
        await commentsService.delete(id);
        dispatch(removed(id));
    } catch (error) {
        dispatch(requestFailed());
    }
};

export const getRoomRates = (roomId) => (state) => {
    if (state.comments.entities) {
        const roomComments = state.comments.entities.filter(
            (comment) => comment.pageId === roomId
        );
        return roomComments.map((comment) => comment.rate);
    }
    return null;
};

export const getCommentsLoading = () => (state) => {
    return state.comments.isLoading;
};

export const getComments = () => (state) => state.comments.entities;

export default commentsReducer;
