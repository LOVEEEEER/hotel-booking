import React, { useEffect } from "react";
import RoomsList from "../../ui/rooms/RoomsList";
import Pagination from "../../common/Pagination";
import Search from "../../common/Search";
import SelectField from "../../common/form/SelectField";
import RoomsListLoading from "../../ui/rooms/RoomsList/RoomsListLoading";
import { useDispatch, useSelector } from "react-redux";
import {
    getRooms,
    loadRooms,
    getRoomsLoading
} from "../../../store/slices/rooms";
import { usePaginate } from "../../../hooks/usePaginate";
import useSearch from "../../../hooks/useSearch";
import { useSort } from "../../../hooks/useSort";
import FilterPanel from "../../ui/rooms/FilterPanel";
import { useFilters } from "../../../hooks/useFilters";
import { getBookingList } from "../../../store/slices/booking";
import { pageSizesList, sortByList } from "../../../constants/AppFilterConfig";

const RoomsListPage = () => {
    const dispatch = useDispatch();
    const rooms = useSelector(getRooms());
    const roomsLoading = useSelector(getRoomsLoading());
    const bookingList = useSelector(getBookingList());
    const { handleFilter, filteredItems } = useFilters(
        rooms || [],
        bookingList || []
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
    } = usePaginate(sortedItems || [], 6);
    useEffect(() => {
        dispatch(loadRooms());
    }, []);
    useEffect(() => {
        handlePageChange(0);
    }, [searchQuery]);
    return (
        <main className="rooms__page">
            <aside className="filter-panel">
                <FilterPanel onFilterQuery={handleFilter} />
            </aside>
            <section className="rooms">
                <div className="rooms__filters">
                    <Search
                        value={searchQuery}
                        onChange={(e) => handleSearchQuery(e, rooms, "title")}
                    />
                    <div className="rooms__select-block">
                        <SelectField
                            value={sortBy.route}
                            options={sortByList}
                            label="Сортировать по:"
                            onChange={handleSortBy}
                            name="sortBy"
                            sx={{ maxWidth: "100%" }}
                        />
                        <SelectField
                            value={pageSize}
                            label="Отображать по"
                            options={pageSizesList}
                            name="pageSize"
                            onChange={({ target }) =>
                                handleChangePageSize(target.value)
                            }
                            sx={{ maxWidth: "100%" }}
                        />
                    </div>
                </div>
                {!roomsLoading && itemsCrop.length > 0 ? (
                    <RoomsList items={itemsCrop} />
                ) : (
                    <RoomsListLoading pageSize={pageSize} />
                )}
                {itemsCrop.length > 0 && (
                    <Pagination
                        currentPage={currentPage}
                        itemsCount={filteredItems.length}
                        pageSize={pageSize}
                        onChange={handlePageChange}
                    />
                )}
            </section>
        </main>
    );
};

export default RoomsListPage;
