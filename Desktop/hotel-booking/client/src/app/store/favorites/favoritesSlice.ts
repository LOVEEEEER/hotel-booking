import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Favorite } from "../../types/types";
import {
    createFavorite,
    loadFavoritesList,
    removeFavorite
} from "./favoritesActions";

const initialState = {
    entities: [] as Favorite[],
    isLoading: true as boolean,
    error: null as string | null
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadFavoritesList.pending.type, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(
            loadFavoritesList.rejected.type,
            (state, action: PayloadAction<string>) => {
                state.error = action.payload;
                state.isLoading = false;
            }
        );
        builder.addCase(
            loadFavoritesList.fulfilled.type,
            (state, action: PayloadAction<Favorite[]>) => {
                state.entities = action.payload;
                state.isLoading = false;
            }
        );
        builder.addCase(
            removeFavorite.fulfilled.type,
            (state, action: PayloadAction<string>) => {
                state.entities = state.entities.filter(
                    (favorite) => favorite.roomId !== action.payload
                );
            }
        );
        builder.addCase(
            createFavorite.fulfilled.type,
            (state, action: PayloadAction<Favorite>) => {
                state.entities.push(action.payload);
            }
        );
    }
});

const { reducer: favoritesReducer } = favoritesSlice;

export default favoritesReducer;
