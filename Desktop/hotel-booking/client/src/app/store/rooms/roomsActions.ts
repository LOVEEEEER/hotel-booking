import { createAsyncThunk } from "@reduxjs/toolkit";
import roomsService from "../../services/rooms.service";
import { Room } from "../../types/types";

export const loadRoomsList = createAsyncThunk(
    "rooms/received",
    async (_, thunkAPI) => {
        try {
            const { content } = await roomsService.fetchAll();
            return content;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const updateRoom = createAsyncThunk(
    "rooms/updated",
    async (payload: Room, thunkAPI) => {
        try {
            await roomsService.update(payload._id, payload);
            return payload;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
);
