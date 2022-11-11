import { createSlice } from "@reduxjs/toolkit";
import bookingService from "../services/booking.service";

const initialState = {
    entities: [],
    isLoading: true,
    error: null,
    currentBookingRoom: null
};

const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        bookingRequested(state, action) {
            state.isLoading = true;
        },
        bookingReceived(state, action) {
            state.entities = action.payload;
            state.isLoading = false;
        },
        bookingRequestFailed(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
        roomBookedReceived(state, action) {
            state.entities.push(action.payload);
            state.currentBookingRoom = action.payload;
        },
        roomBookedFailed(state, action) {
            state.error = action.payload;
        }
    }
});

const { reducer: bookingReducer, actions } = bookingSlice;
const { bookingRequested, bookingReceived, roomBookedReceived } = actions;

export const loadUserBooking = (userId) => async (dispatch) => {
    dispatch(bookingRequested());
    try {
        const { content } = await bookingService.getUserBooking(userId);
        dispatch(bookingReceived(content));
    } catch (error) {
        console.log(error);
    }
};

export const reserveRoom = (bookingRoom) => async (dispatch) => {
    try {
        const { content } = await bookingService.add(
            bookingRoom.id,
            bookingRoom
        );
        dispatch(roomBookedReceived(content));
    } catch (error) {
        console.log(error);
    }
};

export const getUserRooms = () => (state) => state.booking.entities;

export const getCurrentBookingRoom = () => (state) => {
    console.log(state.booking.currentBookingRoom);
    return state.booking.currentBookingRoom
        ? state.booking.currentBookingRoom
        : null;
};

export default bookingReducer;
