import { createSlice } from "@reduxjs/toolkit";
import favoritesService from "../../services/favorites.service";
import { toast } from "react-toastify";

const initialState = {
    entities: null,
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
        },
        removed(state, action) {
            state.entities = state.entities.filter(
                (favorite) => favorite.roomId !== action.payload
            );
        },
        created(state, action) {
            state.entities.push(action.payload);
        }
    }
});

const { reducer: favoritesReducer, actions } = favoritesSlice;
const { requested, requestFailed, received, removed, created } = actions;

export const loadFavorites = () => async (dispatch) => {
    dispatch(requested());
    try {
        const { content } = await favoritesService.fetchAll();
        dispatch(received(content));
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export const removeFavorite = (roomId) => async (dispatch) => {
    try {
        await favoritesService.remove(roomId);
        dispatch(removed(roomId));
        toast.error("Номер успешно удален из списка избранных");
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export const addInFavorites = (data) => async (dispatch) => {
    try {
        await favoritesService.create(data);
        dispatch(created(data));
        toast.success("Номер успешно добавлен в избранное!");
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export const getFavoritesRooms = () => (state) => {
    const favoriteRooms = [];
    if (state.rooms.entities && state.favorites.entities) {
        state.rooms.entities.forEach((room) => {
            state.favorites.entities.forEach((favorite) => {
                if (room._id === favorite.roomId) {
                    favoriteRooms.push(room);
                }
            });
        });
    }
    return favoriteRooms;
};

export const getIsFavorite = (roomId) => (state) => {
    if (state.favorites.entities) {
        const favoriteRoom = state.favorites.entities.some(
            (favorite) => favorite.roomId === roomId
        );
        return favoriteRoom;
    }
};

export const getFavoritesLoading = () => (state) => state.favorites.isLoading;

export default favoritesReducer;
