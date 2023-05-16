import { createAsyncThunk } from "@reduxjs/toolkit";
import bookingService from "../../services/booking.service";
import { Booking } from "../../types/types";

export const loadBookingList = createAsyncThunk(
    "booking/received",
    async (_, thunkAPI) => {
        try {
            const { content } = await bookingService.fetchAll();
            return content;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const createBooking = createAsyncThunk(
    "booking/created",
    async (
        {
            booking,
            onOpenDialog
        }: { booking: Booking; onOpenDialog: () => void },
        thunkAPI
    ) => {
        try {
            await bookingService.create(booking);
            return booking;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const removeBooking = createAsyncThunk(
    "booking/removed",
    async (bookingId: string, thunkAPI) => {
        try {
            await bookingService.remove(bookingId);
            return bookingId;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);
