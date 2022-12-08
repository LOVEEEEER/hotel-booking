import { configureStore, combineReducers } from "@reduxjs/toolkit";
import roomsReducer from "./slices/rooms";
import usersReducer from "./slices/users";
import commentsReducer from "./slices/comments";
import bookingReducer from "./slices/booking";
import favoritesReducer from "./slices/favorites";

const rootReducer = combineReducers({
    rooms: roomsReducer,
    users: usersReducer,
    comments: commentsReducer,
    booking: bookingReducer,
    favorites: favoritesReducer
});

function createStore() {
    return configureStore({ reducer: rootReducer });
}

export default createStore;
