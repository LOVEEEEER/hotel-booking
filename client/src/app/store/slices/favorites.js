import { createSlice } from "@reduxjs/toolkit";
import favoritesService from "../../services/favorites.service";

const initialState = {
    entities: [],
    isLoading: false,
    error: null
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        requested(state, action) {
            state.isLoading = true;
        },
        requestFailed(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
        received(state, action) {
            state.entities = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: favoritesReducer, actions } = favoritesSlice;
const { requested, requestFailed, received } = actions;

export const loadFavorites = () => async (dispatch) => {
    dispatch(requested());
    try {
        const { content } = await favoritesService.fetchAll();
        dispatch(received(content));
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export const addInFavorites = (data) => async (dispatch) => {
    try {
        await favoritesService.create(data.id, data);
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export default favoritesReducer;
