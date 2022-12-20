import { createSlice } from "@reduxjs/toolkit";
import roomsService from "../../services/rooms.service";

const initialState = {
    entities: [],
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
        requestFailed(state, action) {
            state.error = action.payload;
        },
        updated(state, action) {
            const elementIndex = state.entities.findIndex(
                (room) => room._id === action.payload._id
            );
            state.entities[elementIndex] = {
                ...state.entities[elementIndex],
                ...action.payload
            };
        }
    }
});

const { reducer: roomsReducer, actions } = roomsSlice;
const { requested, received, requestFailed, updated } = actions;

export const loadRooms = () => async (dispatch, getState) => {
    dispatch(requested());
    try {
        const { content } = await roomsService.fetchAll();
        dispatch(received(content));
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export const updateRoom = (data) => async (dispatch) => {
    try {
        await roomsService.update(data._id, data);
        dispatch(updated(data));
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export const getRooms = () => (state) => state.rooms.entities;

export const getRoomById = (roomId) => (state) => {
    return state.rooms.entities
        ? state.rooms.entities.find((room) => room._id === roomId)
        : null;
};

export const getRoomsLoading = () => (state) => state.rooms.isLoading;

export default roomsReducer;
