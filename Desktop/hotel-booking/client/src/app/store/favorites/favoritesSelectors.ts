import { Room } from "../../types/types";
import { RootState } from "../createStore";

export const getFavoriteRooms = () => (state: RootState) => {
    const favoritesRooms: Room[] = [];
    state.favorites.entities.forEach((favorite) => {
        const favoriteRoom = state.rooms.entities.find(
            (room) => room._id === favorite.roomId
        );
        if (favoriteRoom) {
            favoritesRooms.push(favoriteRoom);
        }
    });
    return favoritesRooms;
};

export const getIsRoomInFavorites =
    (roomId: Room["_id"]) => (state: RootState) => {
        console.log(state);
        const favoriteRoom = state.favorites.entities.some(
            (favorite) => favorite.roomId === roomId
        );
        return favoriteRoom;
    };

export const getFavoritesLoadingStatus = () => (state: RootState) =>
    state.favorites.isLoading;
