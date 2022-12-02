import React from "react";
import Container from "../components/common/Container";
import Header from "../components/common/Header";
import FavoritesPage from "../components/page/FavoritesPage";

const Favorites = () => {
    return (
        <>
            <Header />
            <Container>
                <FavoritesPage />
            </Container>
        </>
    );
};

export default Favorites;
