import React from "react";
import UsersTable from "../../ui/UsersTable/UsersTable";

const AdminPage = () => {
    return (
        <main className="admin__page">
            <h1 className="admin__title">Панель администратора</h1>
            <UsersTable />
        </main>
    );
};

export default AdminPage;
