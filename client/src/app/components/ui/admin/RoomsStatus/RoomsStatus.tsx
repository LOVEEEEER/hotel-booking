import React from "react";
import { useSelector } from "react-redux";
import { ADMIN_FILTER_KEY } from "../../../../constants/sessionStorageServiceConfig";
import useFiltersQuery from "../../../../hooks/useFiltersQuery";
import { Room } from "../../../../types/types";
import RoomsList from "../../rooms/RoomsList";
import BookingFilterPanel from "../BookingFilterList";
import { getBookingList } from "../../../../store/booking/bookingSelectors";

type RoomsStatusProps = {
    rooms: Room[];
    isAdmin: true;
};

const RoomsStatus: React.FC<RoomsStatusProps> = ({ rooms, ...rest }) => {
    const bookingList = useSelector(getBookingList());
    const { handleFilterQuery, filteredItems } = useFiltersQuery(
        rooms,
        bookingList,
        ADMIN_FILTER_KEY
    );
    return (
        <div className="admin__status">
            <BookingFilterPanel
                onFilterQuery={handleFilterQuery}
                rooms={rooms}
            />
            <RoomsList
                items={filteredItems || []}
                hasPagination={true}
                {...rest}
            />
        </div>
    );
};

export default RoomsStatus;
