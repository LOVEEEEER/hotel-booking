import { createAsyncThunk } from "@reduxjs/toolkit";
import favoriteService from "../../services/favorite.service";
import { Favorite } from "../../types/types";
import { toast } from "react-toastify";

export const loadFavoritesList = createAsyncThunk(
    "favorites/received",
    async (_, thunkAPI) => {
        try {
            const { content } = await favoriteService.fetchAll();
            console.log(content);
            return content;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const removeFavorite = createAsyncThunk(
    "favorites/removed",
    async (favoriteId: string, thunkAPI) => {
        try {
            await favoriteService.remove(favoriteId);
            return favoriteId;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const createFavorite = createAsyncThunk(
    "favorites/created",
    async (payload: Favorite, thunkAPI) => {
        try {
            await favoriteService.create(payload);
            toast.success("Номер успешно добавлен в избранное!");
            return payload;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);
