import { createSlice } from "@reduxjs/toolkit";
import bookingService from "../services/booking.service";

const initialState = {
    entities: [],
    isLoading: true,
    error: null,
    bookingLoading: false
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
        roomBookedRequest(state, action) {
            state.bookingLoading = true;
        },
        roomBookedReceived(state, action) {
            state.bookingLoading = false;
            state.entities.push(action.payload);
        },
        roomBookedFailed(state, action) {
            state.error = action.payload;
        }
    }
});

const { reducer: bookingReducer, actions } = bookingSlice;
const {
    bookingRequested,
    bookingReceived,
    roomBookedReceived,
    roomBookedRequest
} = actions;

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
    dispatch(roomBookedRequest());
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
