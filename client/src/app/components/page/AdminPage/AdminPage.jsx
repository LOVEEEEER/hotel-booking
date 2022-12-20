import React from "react";
import Tabs from "../../common/Tabs";
import UsersTable from "../../ui/UsersTable/UsersTable";
import RoomsList from "../../ui/rooms/RoomsList";
import { useSelector } from "react-redux";
import { getRooms } from "../../../store/slices/rooms";
import BookingList from "../../ui/booking/BookingList";
import TicketList from "../../ui/TicketList";

const AdminPage = () => {
    const rooms = useSelector(getRooms());
    const tabsColumns = [
        {
            name: "Пользователи",
            component: <UsersTable />
        },
        {
            name: "Бронирования",
            component: <BookingList isAdmin={true} />
        },
        {
            name: "Номера",
            component: <RoomsList items={rooms} isAdmin={true} />
        },
        {
            name: "Тикеты",
            component: <TicketList items={rooms} isAdmin={true} />
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
