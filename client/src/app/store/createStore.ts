import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import roomsReducer from "./rooms/roomsSlice";
import commentsReducer from "./comments/commentsSlice";
import bookingReducer from "./booking/bookingSlice";
import favoritesReducer from "./favorites/favoritesSlice";
import ticketsReducer from "./tickets/ticketsSlice";
import usersReducer from "./users/usersSlice";

const rootReducer = combineReducers({
    rooms: roomsReducer,
    comments: commentsReducer,
    booking: bookingReducer,
    favorites: favoritesReducer,
    tickets: ticketsReducer,
    users: usersReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default function createStore() {
    return configureStore({ reducer: rootReducer });
}
