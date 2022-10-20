import React, { useState, useEffect } from "react";
import userService from "../../../services/user.service";
import UsersTable from "../../ui/UsersTable/UsersTable";

const AdminPage = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        getUsers();
    }, []);
    async function getUsers() {
        try {
            const { content } = await userService.fetchAll();
            console.log(content);
            setUsers(content);
        } catch (error) {
            console.log(error);
        }
    }
    console.log(users);
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
