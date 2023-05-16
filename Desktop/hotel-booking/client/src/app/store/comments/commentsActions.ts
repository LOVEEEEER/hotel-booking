import { createAsyncThunk } from "@reduxjs/toolkit";
import commentsService from "../../services/comments.service";
import { Comment } from "../../types/types";

export const loadCommentsList = createAsyncThunk(
    "comments/received",
    async (_, thunkAPI) => {
        try {
            const { content } = await commentsService.fetchAll();
            return content;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const createComment = createAsyncThunk(
    "comments/created",
    async (payload: Comment, thunkAPI) => {
        try {
            await commentsService.create(payload);
            return payload;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const removeComment = createAsyncThunk(
    "comments/removed",
    async (commentId: string, thunkAPI) => {
        try {
            await commentsService.remove(commentId);
            return commentId;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);
