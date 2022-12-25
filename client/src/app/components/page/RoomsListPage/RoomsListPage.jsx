import React, { useEffect } from "react";
import RoomsList from "../../ui/rooms/RoomsList";
import Pagination from "../../common/Pagination";
import Search from "../../common/Search";
import RoomsListLoading from "../../ui/rooms/RoomsList/RoomsListLoading";
import { useDispatch, useSelector } from "react-redux";
import { getRooms, loadRooms } from "../../../store/slices/rooms";
import { usePaginate } from "../../../hooks/usePaginate";
import useSearch from "../../../hooks/useSearch";
import { useSort } from "../../../hooks/useSort";
import FilterPanel from "../../ui/rooms/FilterPanel";
import { useFilters } from "../../../hooks/useFilters";
import { getBookingList } from "../../../store/slices/booking";
import RoomsSort from "../../ui/rooms/RoomsSort";
import "./scss/rooms-list-page.scss";
import { USER_FILTER_KEY } from "../../../constants/sessionStorageServiceConfig";

const RoomsListPage = () => {
    const dispatch = useDispatch();
    const rooms = useSelector(getRooms());
    const bookingList = useSelector(getBookingList());
    const { handleFilter, filteredItems } = useFilters(
        rooms || [],
        bookingList || [],
        USER_FILTER_KEY
    );
    const { searchQueryItems, handleSearchQuery, searchQuery } = useSearch(
        filteredItems || []
    );
    const { sortedItems, handleSortBy, sortBy } = useSort(
        searchQueryItems || [],
        "price"
    );
    const {
        itemsCrop,
        currentPage,
        handlePageChange,
        handleChangePageSize,
        pageSize
    } = usePaginate(sortedItems, 6);
    useEffect(() => {
        dispatch(loadRooms());
    }, []);
    useEffect(() => {
        handlePageChange(0);
    }, [searchQuery]);
    return (
        <main className="rooms__page">
            <div className="filter-panel">
                <FilterPanel onFilterQuery={handleFilter} />
            </div>
            <section className="rooms">
                <div className="rooms__filters">
                    <Search
                        onChange={({ target: { value } }) =>
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
                {itemsCrop.length > 0 ? (
                    <RoomsList
                        items={itemsCrop}
                        searchedItemsCount={searchQueryItems.length}
                    />
                ) : (
                    <RoomsListLoading pageSize={pageSize} />
                )}
                {itemsCrop.length > 0 && (
                    <Pagination
                        currentPage={currentPage}
                        itemsCount={searchQueryItems.length}
                        pageSize={pageSize}
                        onChange={handlePageChange}
                    />
                )}
            </section>
        </main>
    );
};

export default RoomsListPage;
