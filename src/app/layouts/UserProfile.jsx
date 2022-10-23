import React from "react";
import Container from "../components/common/Container";
import Header from "../components/common/Header";
import UserProfilePage from "../components/page/UserProfilePage";
import UsersProvider from "../hooks/useUsers";

const UserProfile = () => {
    return (
        <>
            <Header />
            <UsersProvider>
                <Container>
                    <UserProfilePage />
                </Container>
            </UsersProvider>
        </>
    );
};

export default UserProfile;
