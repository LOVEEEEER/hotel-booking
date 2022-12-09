import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadFavorites } from "../../../store/slices/favorites";

const FavoritesPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadFavorites());
    }, []);
    return (
        <main className="favorites__page">
            <h1>Favorites</h1>
        </main>
    );
};

export default FavoritesPage;
