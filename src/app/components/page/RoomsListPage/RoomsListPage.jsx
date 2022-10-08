import React, { useState } from "react";
import RoomsList from "../../ui/rooms/RoomsList";
import { paginate } from "../../../utils/paginate";
import Pagination from "../../common/Pagination";
import Search from "../../common/Search";
import _ from "lodash";
import SelectField from "../../common/form/SelectField";
import RoomsListLoading from "../../ui/rooms/RoomsList/RoomsListLoading";
import { useRooms } from "../../../hooks/useRooms";
import FilterPanel from "../../ui/rooms/FilterPanel";
import { useForm } from "../../../hooks/useForm";
import { useFilters } from "../../../hooks/useFilters";

const RoomsListPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState("asc");
    const [pageSize, setPageSize] = useState(6);

    const { rooms } = useRooms();
    const { searchQuery, handleSearchQuery, getFilteredItems } = useFilters();
    const initialFilterState = { prices: [], comfort: [] };

    const { data: filters, handleChange: handleChangeFilterValue } =
        useForm(initialFilterState);

    const handleChangePage = (e, page) => {
        setCurrentPage(page);
    };

    const handleChangePageSize = ({ target }) => {
        setPageSize(target.value);
    };

    const handleSort = () => {
        setSortBy((prevState) => (prevState === "asc" ? "desc" : "asc"));
    };

    if (rooms) {
        const searchItems = rooms.filter((item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        const filteredItems = getFilteredItems(searchItems, filters);
        const sortedRooms = _.orderBy(filteredItems, ["price"], [sortBy]);
        const roomsCrop = paginate(sortedRooms, currentPage, pageSize);
        const count = sortedRooms.length;

        return (
            <main className="rooms__page">
                <aside className="filter-panel">
                    <FilterPanel
                        filters={filters}
                        onChangeFilter={handleChangeFilterValue}
                    />
                </aside>
                <section className="rooms">
                    <div className="container rooms__container">
                        <div className="rooms__filters">
                            <Search
                                value={searchQuery}
                                onChange={(e) =>
                                    handleSearchQuery(e, rooms, "title")
                                }
                                sx={{ width: "60%" }}
                            />
                            <div className="rooms__select-block">
                                <SelectField
                                    value={sortBy}
                                    options={[
                                        {
                                            value: "asc",
                                            name: "По возрастанию"
                                        },
                                        { value: "desc", name: "По убыванию" }
                                    ]}
                                    label="Сортировать по:"
                                    onChange={handleSort}
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
                                    onChange={handleChangePageSize}
                                    sx={{ maxWidth: "100%" }}
                                />
                            </div>
                        </div>
                        {roomsCrop.length ? (
                            <RoomsList items={roomsCrop} />
                        ) : (
                            <h1 className="error-page-message">
                                Ничего не найдено :(
                            </h1>
                        )}
                    </div>
                    {roomsCrop.length > 0 && (
                        <Pagination
                            currentPage={currentPage}
                            itemsCount={count}
                            pageSize={pageSize}
                            onChange={handleChangePage}
                        />
                    )}
                </section>
            </main>
        );
    }

    return (
        <>
            <main className="rooms__page">
                <aside className="filter-panel">
                    <FilterPanel
                        filters={filters}
                        onChangeFilter={handleChangeFilterValue}
                    />
                </aside>
                <section className="rooms">
                    <div className="container rooms__container">
                        <div className="rooms__filters">
                            <Search
                                value={searchQuery}
                                onChange={handleSearchQuery}
                                sx={{ width: "60%" }}
                            />
                            <div className="rooms__select-block">
                                <SelectField
                                    value={sortBy}
                                    options={[
                                        {
                                            value: "asc",
                                            name: "По возрастанию"
                                        },
                                        { value: "desc", name: "По убыванию" }
                                    ]}
                                    label="Сортировать по:"
                                    onChange={handleSort}
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
                                    onChange={handleChangePageSize}
                                    sx={{ maxWidth: "100%" }}
                                />
                            </div>
                        </div>
                        <RoomsListLoading pageSize={pageSize} />
                    </div>
                </section>
            </main>
        </>
    );
};

export default RoomsListPage;
