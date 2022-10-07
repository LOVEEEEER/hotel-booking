import React, { useState, useEffect } from "react";
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

const RoomsListPage = () => {
    const { rooms } = useRooms();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("asc");
    const [pageSize, setPageSize] = useState(6);
    const { data: filters, handleChange: handleChangeFilterValue } = useForm({
        prices: []
    });

    const getFilteredItems = () => {
        const filteredItems = [];
        const minValues = [];
        const maxValues = [];

        if (rooms) {
            filters.prices.forEach((p) => {
                minValues.push(p.split("-")[0]);
                maxValues.push(p.split("-")[1]);
            });
            rooms.forEach((room) => {
                minValues.forEach((value, index) => {
                    if (room.price >= value && room.price <= maxValues[index]) {
                        filteredItems.push(room);
                    }
                });
            });
        }
        console.log(filteredItems);
    };
    useEffect(() => {
        getFilteredItems();
    }, [filters]);
    const handleSearchQuery = ({ target }) => {
        setCurrentPage(1);
        setSearchQuery(target.value);
    };
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
        const searchedItems = rooms.filter((hotel) =>
            hotel.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        const sortedRooms = _.orderBy(searchedItems, ["price"], [sortBy]);
        const roomsCrop = paginate(sortedRooms, currentPage, pageSize);
        const count = searchedItems.length;
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
                <section className="rooms">
                    <div className="container rooms__container">
                        <div className="filters">
                            <Search
                                value={searchQuery}
                                onChange={handleSearchQuery}
                                name="searchQuery"
                                sx={{ minWidth: "68%" }}
                            />
                            <SelectField
                                value={sortBy}
                                options={[
                                    { value: "asc", name: "По возрастанию" },
                                    { value: "desc", name: "По убыванию" }
                                ]}
                                label="Сортировать по:"
                                onChange={handleSort}
                                name="sortBy"
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
                            />
                        </div>
                        <RoomsListLoading pageSize={pageSize} />
                    </div>
                </section>
            </main>
        </>
    );
};

export default RoomsListPage;
