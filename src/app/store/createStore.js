import { configureStore, combineReducers } from "@reduxjs/toolkit";
import roomsReducer from "./rooms";

const rootReducer = combineReducers({ rooms: roomsReducer });

function createStore() {
    return configureStore({ reducer: rootReducer });
}

export default createStore;
