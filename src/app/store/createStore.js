import { configureStore, combineReducers } from "@reduxjs/toolkit";
import roomsReducer from "./rooms";
import usersReducer from "./users";
import commentsReducer from "./comments";
import bookingReducer from "./booking";

const rootReducer = combineReducers({
    rooms: roomsReducer,
    users: usersReducer,
    comments: commentsReducer,
    booking: bookingReducer
});

function createStore() {
    return configureStore({ reducer: rootReducer });
}

export default createStore;
