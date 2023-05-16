import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Booking } from "../../types/types";
import {
    createBooking,
    loadBookingList,
    removeBooking
} from "./bookingActions";

const initialState = {
    entities: [] as Booking[],
    isLoading: true as boolean,
    error: null as string | null,
    bookingLoading: false as boolean
};

const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadBookingList.pending.type, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(
            loadBookingList.rejected.type,
            (state, action: PayloadAction<string>) => {
                state.error = action.payload;
                state.isLoading = false;
            }
        );
        builder.addCase(
            loadBookingList.fulfilled.type,
            (state, action: PayloadAction<Booking[]>) => {
                state.entities = action.payload;
                state.isLoading = false;
            }
        );
        builder.addCase(createBooking.pending.type, (state) => {
            state.bookingLoading = true;
        });
        builder.addCase(
            createBooking.fulfilled.type,
            (state, action: PayloadAction<Booking>) => {
                state.entities.push(action.payload);
                state.bookingLoading = false;
            }
        );
        builder.addCase(
            removeBooking.fulfilled.type,
            (state, action: PayloadAction<Booking["_id"]>) => {
                state.entities = state.entities.filter(
                    (booking) => booking._id !== action.payload
                );
            }
        );
    }
});

const { reducer: bookingReducer } = bookingSlice;

export default bookingReducer;
