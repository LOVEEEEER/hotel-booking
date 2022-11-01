import { createSlice } from "@reduxjs/toolkit";
import roomsService from "../services/rooms.service";

const initialState = {
    entities: null,
    isLoading: true,
    error: null
};

const roomsSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {
        roomsRequested(state, action) {
            state.isLoading = true;
        },
        roomsReceived(state, action) {
            console.log(action.payload);
            state.entities = action.payload;
            state.isLoading = false;
        },
        roomsLoadFailed(state, action) {
            state.error = action.payload;
        }
    }
});

const { reducer: roomsReducer, actions } = roomsSlice;
const { roomsRequested, roomsReceived, roomsLoadFailed } = actions;

export const loadRooms = () => async (dispatch, getState) => {
    dispatch(roomsRequested());
    try {
        const { content } = await roomsService.fetchAll();
        dispatch(roomsReceived(content));
    } catch (error) {
        dispatch(roomsLoadFailed(error.message));
    }
};

export const getRooms = () => (state) => state.rooms.entities;

export const getRoomById = (roomId) => (state) => {
    return state.rooms.entities
        ? state.rooms.entities.find((room) => room.id === roomId)
        : null;
};

export default roomsReducer;
