import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import bookingService from "../../services/booking.service";

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
                (item) => item._id !== action.payload
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

export const loadBooking = () => async (dispatch) => {
    dispatch(requested());
    try {
        const { content } = await bookingService.fetchAll();
        dispatch(received(content));
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export const reserveRoom =
    (bookingRoom, openSuccessWindow) => async (dispatch) => {
        dispatch(bookingRequested());
        try {
            const { content } = await bookingService.add(bookingRoom);
            openSuccessWindow();
            dispatch(created(content));
        } catch (error) {
            const { message } = error.response.data.error;
            dispatch(requestFailed(message));
        }
    };

export const deleteUserBooking = (id) => async (dispatch) => {
    try {
        await bookingService.delete(id);
        toast(`?????????? ???????????? ?????????????? ??????????`);
        dispatch(removed(id));
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export const getUserBooking = (userId) => (state) => {
    return state.booking.entities.filter((booking) => {
        return (
            booking.userId.toString() === userId &&
            new Date(booking.entry).getTime() > new Date().getTime()
        );
    });
};

export const getBookingLoading = () => (state) => state.booking.isLoading;

export const getUserBookingCount = (userId) => (dispatch, getState) => {
    return getState().booking.entities.filter(
        (booking) => booking.userId.toString() === userId
    )?.length;
};

export const getBookingList = () => (state) => {
    return state.booking.entities.filter(
        (booking) => new Date(booking.entry).getTime() > new Date().getTime()
    );
};

export const getBookingError = () => (state) => {
    return state.booking.error;
};

export const getBookingById =
    ({ _id: userId }) =>
    (state) => {
        const usersRooms = state.booking.entities.filter(
            (room) => room.userId === userId
        );

        return !state.booking.bookingLoading
            ? usersRooms[usersRooms.length - 1]
            : null;
    };

export default bookingReducer;
