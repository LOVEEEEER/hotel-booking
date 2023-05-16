import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ticket } from "../../types/types";
import { confirmTicket, loadTicketsList, removeTicket } from "./ticketsActions";

const initialState = {
    entities: [] as Ticket[],
    isLoading: true as boolean,
    error: null as string | null
};

const ticketsSlice = createSlice({
    name: "tickets",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadTicketsList.pending.type, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(
            loadTicketsList.rejected.type,
            (state, action: PayloadAction<string>) => {
                state.error = action.payload;
                state.isLoading = false;
            }
        );
        builder.addCase(
            loadTicketsList.fulfilled.type,
            (state, action: PayloadAction<Ticket[]>) => {
                state.entities = action.payload;
                state.isLoading = false;
            }
        );
        builder.addCase(
            confirmTicket.fulfilled.type,
            (state, action: PayloadAction<Ticket>) => {
                const elementIndex = state.entities.findIndex(
                    (ticket) => ticket._id === action.payload._id
                );
                state.entities[elementIndex] = action.payload;
            }
        );
        builder.addCase(
            removeTicket.fulfilled.type,
            (state, action: PayloadAction<Ticket["_id"]>) => {
                state.entities = state.entities.filter(
                    (ticket) => ticket._id !== action.payload
                );
            }
        );
    }
});

const { reducer: ticketsReducer } = ticketsSlice;

export default ticketsReducer;
