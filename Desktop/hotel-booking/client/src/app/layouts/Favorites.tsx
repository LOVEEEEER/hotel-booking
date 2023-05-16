import React from "react";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Container from "../components/common/Container";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import FavoritesPage from "../components/pages/FavoritesPage";

const Favorites = () => {
    return (
        <>
            <Header />
            <Container>
                <Breadcrumbs />
                <FavoritesPage />
            </Container>
            <Footer />
        </>
    );
};

export default Favorites;
