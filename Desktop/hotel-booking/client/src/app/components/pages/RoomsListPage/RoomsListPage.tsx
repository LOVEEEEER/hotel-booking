import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { USER_FILTER_KEY } from "../../../constants/sessionStorageServiceConfig";
import useFiltersQuery from "../../../hooks/useFiltersQuery";
import usePaginate from "../../../hooks/usePaginate";
import useSearchQuery from "../../../hooks/useSearchQuery";
import useSort from "../../../hooks/useSort";
import { useAppDispatch } from "../../../store/createStore";
import Pagination from "../../common/Pagination";
import SearchBar from "../../common/SearchBar";
import RoomsFilters from "../../ui/rooms/RoomsFilters";
import RoomsList, { RoomsListSkeleton } from "../../ui/rooms/RoomsList";
import RoomsSort from "../../ui/rooms/RoomsSort";
import {
    getRoomsList,
    getRoomsLoadingStatus
} from "../../../store/rooms/roomsSelectors";
import { getBookingList } from "../../../store/booking/bookingSelectors";
import { loadRoomsList } from "../../../store/rooms/roomsActions";

const RoomsListPage = () => {
    const dispatch = useAppDispatch();
    const rooms = useSelector(getRoomsList());
    const roomsLoading = useSelector(getRoomsLoadingStatus());
    const bookingList = useSelector(getBookingList());
    const { handleFilterQuery, filteredItems } = useFiltersQuery(
        rooms || [],
        bookingList || [],
        USER_FILTER_KEY
    );
    const { searchedItems, handleSearchQuery, searchQuery } = useSearchQuery(
        filteredItems || [],
        "title"
    );
    const { sortedItems, handleSortBy, sortBy } = useSort(
        searchedItems || [],
        "price"
    );
    const {
        itemsCrop,
        currentPage,
        handleChangePage,
        handleChangePageSize,
        pageSize
    } = usePaginate(sortedItems, 6);
    useEffect(() => {
        dispatch(loadRoomsList());
    }, []);
    useEffect(() => {
        handleChangePage(0);
    }, [searchQuery]);
    return (
        <main className="rooms__page">
            <div className="filter-panel">
                <RoomsFilters onFilterQuery={handleFilterQuery} />
            </div>
            <section className="rooms">
                <div className="rooms__filters">
                    <SearchBar
                        onChange={({
                            target: { value }
                        }: React.ChangeEvent<HTMLInputElement>) =>
                            handleSearchQuery(value)
                        }
                    />
                    <RoomsSort
                        sortBy={sortBy}
                        pageSize={pageSize}
                        onChangePageSize={handleChangePageSize}
                        onSortBy={handleSortBy}
                    />
                </div>
                {itemsCrop.length > 0 && !roomsLoading ? (
                    <RoomsList
                        items={itemsCrop}
                        searchedItemsCount={searchedItems.length}
                    />
                ) : (
                    <RoomsListSkeleton pageSize={pageSize} />
                )}
                {itemsCrop.length > 0 && (
                    <Pagination
                        currentPage={currentPage}
                        itemsCount={searchedItems.length}
                        pageSize={pageSize}
                        onChange={handleChangePage}
                    />
                )}
            </section>
        </main>
    );
};

export default RoomsListPage;
