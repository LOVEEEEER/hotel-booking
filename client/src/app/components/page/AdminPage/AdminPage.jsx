import React from "react";
import Tabs from "../../common/Tabs";
import UsersTable from "../../ui/UsersTable/UsersTable";
import UsersBookingList from "../../ui/admin/UsersBookingList";
import RoomsList from "../../ui/rooms/RoomsList";
import { useSelector } from "react-redux";
import { getRooms } from "../../../store/slices/rooms";

const AdminPage = () => {
    const rooms = useSelector(getRooms());
    const tabsColumns = [
        {
            name: "Пользователи",
            component: <UsersTable />
        },
        {
            name: "Бронирования",
            component: <UsersBookingList />
        },
        {
            name: "Номера",
            component: <RoomsList items={rooms.slice(0, 4)} isAdmin={true} />
        }
    ];
    if (rooms) {
        return (
            <main className="admin__page">
                <Tabs options={tabsColumns} />
            </main>
        );
    }
};

export default AdminPage;
