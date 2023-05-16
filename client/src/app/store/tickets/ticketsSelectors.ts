import { RootState } from "../createStore";

export const getTicketsList = () => (state: RootState) =>
    state.tickets.entities;

export const getTicketsLoadingStatus = () => (state: RootState) =>
    state.tickets.isLoading;
