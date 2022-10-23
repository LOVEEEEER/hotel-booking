import React from "react";
import { useUsers } from "../../../hooks/useUsers";
import UsersTable from "../../ui/UsersTable/UsersTable";

const AdminPage = () => {
    const { users } = useUsers();
    return (
        <main className="admin__page">
            {users ? (
                <>
                    <h1 className="admin__title">Панель администратора</h1>
                    <UsersTable data={users} />
                </>
            ) : (
                "loading"
            )}
        </main>
    );
};

export default AdminPage;
