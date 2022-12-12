import { useState } from "react";

export const useFilters = (initialState, bookingList) => {
    const [filteredItems, setFilteredItems] = useState();
    const handleFilterQuery = (name, data) => {
        switch (name) {
            case "departure":
            case "entry": {
                if (data.entry && data.departure) {
                    const entry = new Date(data.entry).getTime();
                    const departure = new Date(data.departure).getTime();
                    const filteredBookingList = bookingList.filter(
                        (booking) => {
                            const bookingEntry = new Date(
                                booking.entry
                            ).getTime();
                            const bookingDeparture = new Date(
                                booking.departure
                            ).getTime();
                            const isValidList =
                                bookingEntry >= entry &&
                                bookingDeparture <= departure;
                            if (isValidList) {
                                return true;
                            } else {
                                return false;
                            }
                        }
                    );
                    const bookingRoomIds = filteredBookingList.map(
                        (booking) => booking.roomId
                    );
                    const filteredRoomsByNotBooked = initialState.filter(
                        (room) => {
                            if (bookingRoomIds.includes(room._id)) {
                                return false;
                            }
                            return true;
                        }
                    );
                    setFilteredItems(filteredRoomsByNotBooked);
                }
                break;
            }

            default:
                break;
        }
    };

    return { handleFilterQuery, filteredItems };
};
