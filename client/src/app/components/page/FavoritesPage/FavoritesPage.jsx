import React from "react";
import { useSelector } from "react-redux";
import {
    getFavoritesLoading,
    getFavoritesRooms
} from "../../../store/slices/favorites";
import { getRoomsLoading } from "../../../store/slices/rooms";
import RoomsList from "../../ui/rooms/RoomsList/RoomsList";

const FavoritesPage = () => {
    const favoritesLoading = useSelector(getFavoritesLoading());
    const favoriteRooms = useSelector(getFavoritesRooms());
    const roomsLoading = useSelector(getRoomsLoading());
    if (!favoritesLoading && !roomsLoading) {
        return (
            <main className="favorites__page">
                <RoomsList
                    forFavorites={true}
                    items={favoriteRooms}
                    clearListMessage="Список избранных номеров пуст"
                />
            </main>
        );
    }
};

export default FavoritesPage;
