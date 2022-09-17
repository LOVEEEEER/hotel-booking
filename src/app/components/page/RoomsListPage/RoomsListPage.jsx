import React, { useEffect, useState } from "react";
import api from "../../../api";
import RoomsList from "../../ui/RoomsList";
import { paginate } from "../../../utils/paginate";
import Pagination from "../../common/Pagination";
import Search from "../../common/Search";
import _ from "lodash";
import SelectField from "../../common/SelectField";
import RoomsListLoading from "../../ui/RoomsList/RoomsListLoading";

const RoomsListPage = () => {
  const [hotels, setHotels] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("asc");
  const [pageSize, setPageSize] = useState(6);
  useEffect(() => {
    api.hotels.fetchAll().then((data) => setHotels(data));
  }, []);
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
  const handleSort = (item) => {
    console.log(item.target);
    setSortBy((prevState) => (prevState === "asc" ? "desc" : "asc"));
  };
  if (hotels) {
    const searchedItems = hotels.filter((hotel) =>
      hotel.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const sortedHotels = _.orderBy(searchedItems, ["price"], [sortBy]);
    const roomsCrop = paginate(sortedHotels, currentPage, pageSize);
    const count = searchedItems.length;
    console.log(searchedItems);
    return (
      <main className="rooms__page">
        <section className="rooms">
          <div className="container rooms__container">
            <div className="filters">
              <Search
                value={searchQuery}
                onChange={handleSearchQuery}
                name="searchQuery"
                label="Search..."
                sx={{ minWidth: "68%" }}
              />
              <SelectField
                value={sortBy}
                options={[
                  { value: "asc", name: "По возрастанию" },
                  { value: "desc", name: "По убыванию" },
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
                  { value: 24, name: "24" },
                ]}
                name="pageSize"
                onChange={handleChangePageSize}
              />
            </div>
            {roomsCrop.length ? (
              <RoomsList items={roomsCrop} />
            ) : (
              <h1 className="error-page-message">Ничего не найдено :(</h1>
            )}
          </div>
        </section>
        {roomsCrop.length > 0 && (
          <Pagination
            currentPage={currentPage}
            itemsCount={count}
            pageSize={pageSize}
            onChange={handleChangePage}
          />
        )}
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
                label="Search..."
                sx={{ minWidth: "68%" }}
              />
              <SelectField
                value={sortBy}
                options={[
                  { value: "asc", name: "По возрастанию" },
                  { value: "desc", name: "По убыванию" },
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
                  { value: 24, name: "24" },
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
