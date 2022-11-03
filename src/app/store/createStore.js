import { configureStore, combineReducers } from "@reduxjs/toolkit";
import roomsReducer from "./rooms";
import usersReducer from "./users";
import commentsReducer from "./comments";

const rootReducer = combineReducers({
    rooms: roomsReducer,
    users: usersReducer,
    comments: commentsReducer
});

function createStore() {
    return configureStore({ reducer: rootReducer });
}

export default createStore;
