import React from "react";
import Tabs from "../../common/Tabs";
import UsersTable from "../../ui/UsersTable/UsersTable";
import UsersBookingList from "../../ui/admin/UsersBookingList";

const AdminPage = () => {
    const tabsColumns = [
        {
            name: "Пользователи",
            component: <UsersTable />
        },
        {
            name: "Бронирования",
            component: <UsersBookingList />
        }
    ];
    return (
        <main className="admin__page">
            <Tabs options={tabsColumns} />
        </main>
    );
};

export default AdminPage;
