import { createSlice } from "@reduxjs/toolkit";
import roomsService from "../../services/rooms.service";

const initialState = {
    entities: null,
    isLoading: true,
    error: null
};

const roomsSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {
        requested(state, action) {
            state.isLoading = true;
        },
        received(state, action) {
            state.entities = action.payload;
            state.isLoading = false;
        },
        loadFailed(state, action) {
            state.error = action.payload;
        }
    }
});

const { reducer: roomsReducer, actions } = roomsSlice;
const { requested, received, loadFailed } = actions;

export const loadRooms = () => async (dispatch, getState) => {
    dispatch(requested());
    try {
        const { content } = await roomsService.fetchAll();
        dispatch(received(content));
    } catch (error) {
        dispatch(loadFailed(error.message));
    }
};

export const getRooms = () => (state) => state.rooms.entities;

export const getRoomById = (roomId) => (state) => {
    return state.rooms.entities
        ? state.rooms.entities.find((room) => room.id === roomId)
        : null;
};

export const getRoomsLoading = () => (state) => state.rooms.isLoading;

export default roomsReducer;
