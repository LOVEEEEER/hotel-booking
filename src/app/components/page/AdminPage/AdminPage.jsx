import React from "react";
import { useUsers } from "../../../hooks/useUsers";
import UsersTable from "../../ui/UsersTable/UsersTable";

const AdminPage = () => {
    const { users, deleteUser } = useUsers();
    return (
        <main className="admin__page">
            <h1 className="admin__title">Панель администратора</h1>
            <UsersTable data={users} onDelete={deleteUser} />
        </main>
    );
};

export default AdminPage;
