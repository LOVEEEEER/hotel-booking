import React from "react";
import Container from "../components/common/Container";
import Header from "../components/common/Header";
import AdminPage from "../components/page/AdminPage";
import UsersProvider from "../hooks/useUsers";

const Admin = () => {
    return (
        <UsersProvider>
            <Header />
            <Container>
                <AdminPage />
            </Container>
        </UsersProvider>
    );
};

export default Admin;
