import React, { useEffect } from "react";
import RoomsList from "../../ui/rooms/RoomsList";
import Pagination from "../../common/Pagination";
import Search from "../../common/Search";
import SelectField from "../../common/form/SelectField";
import RoomsListLoading from "../../ui/rooms/RoomsList/RoomsListLoading";
import { useDispatch, useSelector } from "react-redux";
import { getRooms, loadRooms } from "../../../store/slices/rooms";
import { usePaginate } from "../../../hooks/usePaginate";
import useSearch from "../../../hooks/useSearch";
import { useSort } from "../../../hooks/useSort";
import FilterPanel from "../../ui/rooms/FilterPanel";
import { useFilters } from "../../../hooks/useFilters";
import { getBookingList } from "../../../store/slices/booking";

const RoomsListPage = () => {
    const dispatch = useDispatch();
    const rooms = useSelector(getRooms());
    const bookingList = useSelector(getBookingList());
    const { handleFilterQuery, filteredItems } = useFilters(
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
    return (
        <main className="rooms__page">
            <aside className="filter-panel">
                <FilterPanel onFilterQuery={handleFilterQuery} />
            </aside>
            <section className="rooms">
                <div className="rooms__filters">
                    <Search
                        value={searchQuery}
                        onChange={(e) => handleSearchQuery(e, rooms, "title")}
                        sx={{ width: "600px" }}
                    />
                    <div className="rooms__select-block">
                        <SelectField
                            value={sortBy.route}
                            options={[
                                {
                                    value: "asc",
                                    name: "По возрастанию"
                                },
                                { value: "desc", name: "По убыванию" }
                            ]}
                            label="Сортировать по:"
                            onChange={handleSortBy}
                            name="sortBy"
                            sx={{ maxWidth: "100%" }}
                        />
                        <SelectField
                            value={pageSize}
                            label="Отображать по"
                            options={[
                                { value: 6, name: "6" },
                                { value: 12, name: "12" },
                                { value: 18, name: "18" },
                                { value: 24, name: "24" }
                            ]}
                            name="pageSize"
                            onChange={({ target }) =>
                                handleChangePageSize(target.value)
                            }
                            sx={{ maxWidth: "100%" }}
                        />
                    </div>
                </div>
                {itemsCrop.length ? (
                    <RoomsList items={itemsCrop} />
                ) : (
                    <RoomsListLoading pageSize={pageSize} />
                )}
                {itemsCrop.length > 0 && (
                    <Pagination
                        currentPage={currentPage}
                        itemsCount={rooms.length}
                        pageSize={pageSize}
                        onChange={handlePageChange}
                    />
                )}
            </section>
        </main>
    );
};

export default RoomsListPage;
