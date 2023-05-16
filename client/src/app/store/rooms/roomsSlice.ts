import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Room } from "../../types/types";
import { loadRoomsList, updateRoom } from "./roomsActions";

const initialState = {
    entities: [] as Room[],
    isLoading: true as boolean,
    error: null as string | null
};

const roomsSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadRoomsList.pending.type, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(
            loadRoomsList.rejected.type,
            (state, action: PayloadAction<string>) => {
                state.error = action.payload;
                state.isLoading = false;
            }
        );
        builder.addCase(
            loadRoomsList.fulfilled.type,
            (state, action: PayloadAction<Room[]>) => {
                console.log(action.payload);
                state.entities = action.payload;
                state.isLoading = false;
            }
        );
        builder.addCase(
            updateRoom.fulfilled.type,
            (state, action: PayloadAction<Room>) => {
                const elementIndex = state.entities.findIndex(
                    (room) => room._id === action.payload._id
                );
                state.entities[elementIndex] = action.payload;
            }
        );
    }
});

const { reducer: roomsReducer } = roomsSlice;

export default roomsReducer;
