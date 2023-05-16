import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Comment } from "../../types/types";
import {
    createComment,
    loadCommentsList,
    removeComment
} from "./commentsActions";

const initialState = {
    entities: [] as Comment[],
    isLoading: true as boolean,
    error: null as string | null
};

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadCommentsList.pending.type, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(
            loadCommentsList.rejected.type,
            (state, action: PayloadAction<string>) => {
                state.error = action.payload;
                state.isLoading = false;
            }
        );
        builder.addCase(
            loadCommentsList.fulfilled.type,
            (state, action: PayloadAction<Comment[]>) => {
                state.entities = action.payload;
                state.isLoading = false;
            }
        );
        builder.addCase(
            createComment.fulfilled.type,
            (state, action: PayloadAction<Comment>) => {
                state.entities.push(action.payload);
            }
        );
        builder.addCase(
            removeComment.fulfilled.type,
            (state, action: PayloadAction<Comment["_id"]>) => {
                state.entities = state.entities.filter(
                    (comment) => comment._id !== action.payload
                );
            }
        );
    }
});

const { reducer: commentsReducer } = commentsSlice;

export default commentsReducer;
