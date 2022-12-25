import { configureStore, combineReducers } from "@reduxjs/toolkit";
import roomsReducer from "./slices/rooms";
import usersReducer from "./slices/users";
import commentsReducer from "./slices/comments";
import bookingReducer from "./slices/booking";
import favoritesReducer from "./slices/favorites";
import ticketsReducer from "./slices/tickets";

const rootReducer = combineReducers({
    rooms: roomsReducer,
    users: usersReducer,
    comments: commentsReducer,
    booking: bookingReducer,
    favorites: favoritesReducer,
    tickets: ticketsReducer
});

function createStore() {
    return configureStore({ reducer: rootReducer });
}

export default createStore;
