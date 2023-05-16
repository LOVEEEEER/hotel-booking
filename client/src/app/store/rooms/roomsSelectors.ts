import { Room } from "../../types/types";
import { RootState } from "../createStore";

export const getRoomsList = () => (state: RootState) => {
    return state.rooms.entities;
};

export const getRoomById = (roomId: Room["_id"]) => (state: RootState) => {
    return state.rooms.entities.find((room) => room._id === roomId);
};

export const getRoomsLoadingStatus = () => (state: RootState) => {
    return state.rooms.isLoading;
};
