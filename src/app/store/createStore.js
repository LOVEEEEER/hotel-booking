import { configureStore, combineReducers } from "@reduxjs/toolkit";
import roomsReducer from "./rooms";
import usersReducer from "./users";

const rootReducer = combineReducers({
    rooms: roomsReducer,
    users: usersReducer
});

function createStore() {
    return configureStore({ reducer: rootReducer });
}

export default createStore;
