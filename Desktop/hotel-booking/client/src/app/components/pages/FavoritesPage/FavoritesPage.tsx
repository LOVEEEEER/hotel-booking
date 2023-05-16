import React from "react";
import { useSelector } from "react-redux";
import RoomsList from "../../ui/rooms/RoomsList";
import {
    getFavoriteRooms,
    getFavoritesLoadingStatus
} from "../../../store/favorites/favoritesSelectors";
import { Favorite } from "../../../types/types";

const FavoritesPage: React.FC = () => {
    const favoritesLoading = useSelector(getFavoritesLoadingStatus());
    const favoriteRooms = useSelector(getFavoriteRooms());
    if (!favoritesLoading && favoriteRooms) {
        return (
            <main className="favorites__page">
                <RoomsList
                    hasPagination={true}
                    isFavorites={true}
                    items={favoriteRooms!}
                    clearListMessage="Список избранных номеров пуст"
                />
            </main>
        );
    }
    return <></>;
};

export default FavoritesPage;
