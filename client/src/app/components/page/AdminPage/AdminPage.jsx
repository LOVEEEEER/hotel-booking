import React from "react";
import Tabs from "../../common/Tabs";
import BookingList from "../../ui/booking/BookingList";
import TicketList from "../../ui/admin/TicketList/TicketList";
import UsersTable from "../../ui/admin/UsersTable";
import RoomsStatus from "../../ui/admin/RoomsStatus/RoomsStatus";
import { useSelector } from "react-redux";
import { getRooms, getRoomsLoading } from "../../../store/slices/rooms";
import { getBookingLoading } from "../../../store/slices/booking";

const AdminPage = () => {
    const rooms = useSelector(getRooms());
    const roomsLoading = useSelector(getRoomsLoading());
    const bookingLoading = useSelector(getBookingLoading());
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
            component: <RoomsStatus rooms={rooms} isAdmin={true} />
        },
        {
            name: "Тикеты",
            component: <TicketList />
        }
    ];
    if (!roomsLoading && !bookingLoading) {
        return (
            <main className="admin__page">
                <Tabs options={tabsColumns} />
            </main>
        );
    }
};

export default AdminPage;
