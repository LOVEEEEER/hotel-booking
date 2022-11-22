import { createSlice } from "@reduxjs/toolkit";
import bookingService from "../services/booking.service";

const initialState = {
    entities: null,
    isLoading: true,
    error: null,
    bookingLoading: false
};

const bookingSlice = createSlice({
    name: "booking",
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
            state.isLoading = false;
        },
        bookingRequested(state, action) {
            state.bookingLoading = true;
        },
        created(state, action) {
            state.bookingLoading = false;
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        requetFailed(state, action) {
            state.error = action.payload;
        },
        removed(state, action) {
            state.entities = state.entities.filter(
                (item) => item.id !== action.payload
            );
        }
    }
});

const { reducer: bookingReducer, actions } = bookingSlice;
const {
    requested,
    received,
    created,
    bookingRequested,
    removed,
    requestFailed
} = actions;

export const loadUserBooking = (userId) => async (dispatch) => {
    dispatch(requested());
    try {
        const { content } = await bookingService.getUserBooking(userId);
        dispatch(received(content));
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export const reserveRoom = (bookingRoom) => async (dispatch) => {
    dispatch(bookingRequested());
    try {
        const { content } = await bookingService.add(
            bookingRoom.id,
            bookingRoom
        );
        dispatch(created(content));
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export const deleteUserBooking = (id) => async (dispatch) => {
    try {
        await bookingService.delete(id);
        dispatch(removed(id));
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export const getUserBooking = () => (state) => state.booking.entities;

export const getBookingById =
    ({ id: userId }) =>
    (state) => {
        const usersRooms = state.booking.entities.filter(
            (room) => room.user === userId
        );

        return !state.booking.bookingLoading
            ? usersRooms[usersRooms.length - 1]
            : null;
    };

export default bookingReducer;
