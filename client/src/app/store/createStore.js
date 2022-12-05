import { configureStore, combineReducers } from "@reduxjs/toolkit";
import roomsReducer from "./rooms";
import usersReducer from "./users";
import commentsReducer from "./comments";
import bookingReducer from "./booking";
import favoritesReducer from "./favorites";

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
