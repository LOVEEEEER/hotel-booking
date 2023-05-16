import React from "react";
import { useSelector } from "react-redux";
import RoomsStatus from "../../ui/admin/RoomsStatus";
import TicketsList from "../../ui/admin/tickets/TicketsList";
import Tabs from "../../common/Tabs";
import {
    getRoomsList,
    getRoomsLoadingStatus
} from "../../../store/rooms/roomsSelectors";
import { getBookingLoadingStatus } from "../../../store/booking/bookingSelectors";
import BookingList from "../../ui/booking/BookingList";

const AdminPage: React.FC = () => {
    const rooms = useSelector(getRoomsList());
    const roomsLoading = useSelector(getRoomsLoadingStatus());
    const bookingLoading = useSelector(getBookingLoadingStatus());
    const tabsColumns = [
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
            component: <TicketsList />
        }
    ];
    if (!roomsLoading && !bookingLoading) {
        return (
            <main className="admin__page">
                <Tabs options={tabsColumns} />
            </main>
        );
    }
    return <></>;
};

export default AdminPage;
