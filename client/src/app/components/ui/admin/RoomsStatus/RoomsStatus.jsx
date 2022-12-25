import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useFilters } from "../../../../hooks/useFilters";
import { getBookingList } from "../../../../store/slices/booking";
import RoomsList from "../../rooms/RoomsList/RoomsList";
import BookingFilterPanel from "../BookingFilterPanel";
import { ADMIN_FILTER_KEY } from "../../../../constants/sessionStorageServiceConfig";

const RoomsStatus = ({ rooms, ...rest }) => {
    const bookingList = useSelector(getBookingList());
    const { handleFilter, filteredItems } = useFilters(
        rooms,
        bookingList,
        ADMIN_FILTER_KEY
    );
    return (
        <div className="admin__status">
            <BookingFilterPanel onFilterQuery={handleFilter} rooms={rooms} />
            <RoomsList
                items={filteredItems || []}
                hasPagination={true}
                {...rest}
            />
        </div>
    );
};

RoomsStatus.propTypes = {
    rooms: PropTypes.array.isRequired
};

export default RoomsStatus;
