import React from "react";
import { useSelector } from "react-redux";
import {
    getFavoritesLoading,
    getFavoritesRooms
} from "../../../store/slices/favorites";
import RoomsList from "../../ui/rooms/RoomsList/RoomsList";

const FavoritesPage = () => {
    const favoritesLoading = useSelector(getFavoritesLoading());
    const favoriteRooms = useSelector(getFavoritesRooms());
    if (!favoritesLoading) {
        return (
            <main className="favorites__page">
                <RoomsList
                    hasPagination={true}
                    forFavorites={true}
                    items={favoriteRooms}
                    clearListMessage="Список избранных номеров пуст"
                />
            </main>
        );
    }
};

export default FavoritesPage;
