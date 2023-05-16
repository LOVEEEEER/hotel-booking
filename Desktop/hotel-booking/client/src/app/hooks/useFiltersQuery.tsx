import { useState } from "react";
import { filtersInitialState } from "../components/ui/rooms/RoomsFilters/RoomsFilters";
import sessionStorageService from "../services/sessionStorage.service";
import { Booking, Room } from "../types/types";
import { isIncludeElement } from "../utils/isIncludeElement";

export type FiltersType = {
    entry: Date;
    departure: Date;
    comfort?: string[];
    breakfast?: string[];
    categories?: string[];
};

export default function useFiltersQuery(
    initialState: Room[],
    bookingList: Booking[],
    localKey: string = "filtersData"
) {
    const [filteredItems, setFilteredItems] = useState<Room[]>(initialState);
    const handleFilterQuery = (data: FiltersType) => {
        let filteredRooms = initialState;
        if (data.entry && data.departure) {
            const entry = new Date(data.entry).getTime();
            const departure = new Date(data.departure).getTime();
            const bookingsByDate = bookingList.filter((booking) => {
                const entryBooking = new Date(booking.entry).getTime();
                const departureBooking = new Date(booking.departure).getTime();
                const isNotAvaible =
                    (entry >= entryBooking && entry <= departureBooking) ||
                    (departure >= entryBooking &&
                        departure <= departureBooking) ||
                    (entry < entryBooking && departure > departureBooking);
                if (isNotAvaible) {
                    return true;
                }
                return false;
            });

            const bookingRoomsByIds = bookingsByDate.map((book) => book.roomId);
            const roomsByNotBooked = initialState.filter((room) => {
                if (bookingRoomsByIds.includes(room._id)) return false;
                return true;
            });
            filteredRooms = roomsByNotBooked;

            if (data.comfort && data.breakfast && data.categories) {
                if (data.categories && data.categories.length > 0) {
                    filteredRooms = filteredRooms.filter(
                        (item) =>
                            data.categories &&
                            data.categories.includes(item.type)
                    );
                }
                if (isIncludeElement(data.comfort, "hasSmokeZone")) {
                    filteredRooms = filteredRooms.filter(
                        (item) => item.hasSmokeZone
                    );
                }
                if (isIncludeElement(data.comfort, "hasSwimmingPool")) {
                    filteredRooms = filteredRooms.filter(
                        (item) => item.hasSwimmingPool
                    );
                }
                if (isIncludeElement(data.comfort, "hasBank")) {
                    filteredRooms = filteredRooms.filter(
                        (item) => item.hasBank
                    );
                }
                if (isIncludeElement(data.comfort, "hasWifi")) {
                    filteredRooms = filteredRooms.filter(
                        (item) => item.hasWifi
                    );
                }
                if (isIncludeElement(data.comfort, "hasGym")) {
                    filteredRooms = filteredRooms.filter((item) => item.hasGym);
                }
                if (isIncludeElement(data.comfort, "hasParking")) {
                    filteredRooms = filteredRooms.filter(
                        (item) => item.hasParking
                    );
                }
                if (isIncludeElement(data.comfort, "hasConditioner")) {
                    filteredRooms = filteredRooms.filter(
                        (item) => item.hasConditioner
                    );
                }

                if (isIncludeElement(data.breakfast, "italian")) {
                    filteredRooms = filteredRooms.filter((item) =>
                        item.breakfast.includes("italian")
                    );
                }

                if (isIncludeElement(data.breakfast, "sweden")) {
                    filteredRooms = filteredRooms.filter((item) =>
                        item.breakfast.includes("sweden")
                    );
                }

                if (isIncludeElement(data.breakfast, "vegeterian")) {
                    filteredRooms = filteredRooms.filter((item) =>
                        item.breakfast.includes("vegeterian")
                    );
                }
            }

            sessionStorageService.toSessionStorage(localKey, data);
        }
        setFilteredItems(filteredRooms);
    };
    return { filteredItems, handleFilterQuery };
}
