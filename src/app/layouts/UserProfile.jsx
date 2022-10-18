import React from "react";
import Container from "../components/common/Container";
import Header from "../components/common/Header";
import UserProfilePage from "../components/page/UserProfilePage";

const UserProfile = () => {
    return (
        <>
            <Header />
            <Container>
                <UserProfilePage />
            </Container>
        </>
    );
};

export default UserProfile;
