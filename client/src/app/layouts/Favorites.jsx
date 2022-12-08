import React from "react";
import BreadCrumbs from "../components/common/Breadcrumbs";
import Container from "../components/common/Container";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import FavoritesPage from "../components/page/FavoritesPage";

const Favorites = () => {
    return (
        <>
            <Header />
            <Container>
                <BreadCrumbs />
                <FavoritesPage />
            </Container>
            <Footer />
        </>
    );
};

export default Favorites;
