import { createAsyncThunk } from "@reduxjs/toolkit";
import ticketsService from "../../services/tickets.service";
import { Ticket } from "../../types/types";

export const loadTicketsList = createAsyncThunk(
    "tickets/received",
    async (_, thunkAPI) => {
        try {
            const { content } = await ticketsService.fetchAll();
            return content;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const confirmTicket = createAsyncThunk(
    "tickets/confirmed",
    async (payload: Ticket, thunkAPI) => {
        try {
            await ticketsService.confirm(payload._id!, payload);
            return payload;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const removeTicket = createAsyncThunk(
    "tickets/removed",
    async (ticketId: string, thunkAPI) => {
        try {
            await ticketsService.remove(ticketId);
            return ticketId;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);
