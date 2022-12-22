import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "../../../../hooks/useForm";
import { getPresenceBookingDate } from "../../../../utils/dateService";
import Button from "../../../common/Button";
import DatePicker from "../../../common/form/DatePicker";
import { useSelector } from "react-redux";
import { getRoomsLoading } from "../../../../store/slices/rooms";
import { getBookingLoading } from "../../../../store/slices/booking";
import CheckboxField from "../../../common/form/CheckboxField";
import {
    breakfastList,
    categoriesList,
    comfortList
} from "../../../../constants/AppFilterConfig";
import sessionStorageService from "../../../../services/sessionStorage.service";

const FilterPanel = ({ onFilterQuery }) => {
    const roomsLoading = useSelector(getRoomsLoading());
    const bookingLoading = useSelector(getBookingLoading());
    const storageData = sessionStorageService.fromSessionStorage("filtersData");
    const { data, handleChange } = useForm(
        !storageData
            ? {
                  entry: getPresenceBookingDate(1),
                  departure: getPresenceBookingDate(2),
                  comfort: [],
                  breakfast: [],
                  categories: []
              }
            : storageData
    );
    useEffect(() => {
        if (!roomsLoading && !bookingLoading) {
            onFilterQuery(data);
        }
    }, [data, roomsLoading, bookingLoading]);
    return (
        <div className="filter-panel__block">
            <ul className="filter-panel__list">
                <li className="filter-panel__item">
                    <h3 className="filter-panel__filter-title">Пребывание</h3>
                    <DatePicker
                        name="entry"
                        value={data.entry}
                        onChange={handleChange}
                        sx={{ marginBottom: "15px" }}
                        label="Заезд"
                    />
                    <DatePicker
                        name="departure"
                        value={data.departure}
                        onChange={handleChange}
                        sx={{ marginBottom: "15px" }}
                        label="Выезд"
                    />
                </li>
                <li className="filter-panel__item">
                    <h3 className="filter-panel__filter-title">Удобства</h3>
                    <CheckboxField
                        name="comfort"
                        onChange={handleChange}
                        value={data.comfort}
                        options={comfortList}
                    />
                </li>
                <li className="filter-panel__item">
                    <h3 className="filter-panel__filter-title">Завтраки</h3>
                    <CheckboxField
                        name="breakfast"
                        value={data.breakfast}
                        onChange={handleChange}
                        options={breakfastList}
                    />
                </li>
                <li className="filter-panel__item">
                    <h3 className="filter-panel__filter-title">Категория</h3>
                    <CheckboxField
                        name="categories"
                        value={data.categories}
                        onChange={handleChange}
                        options={categoriesList}
                    />
                </li>
                <Button sx={{ width: "100%" }}>Сбросить фильтры</Button>
            </ul>
        </div>
    );
};

FilterPanel.propTypes = {
    onFilterQuery: PropTypes.func.isRequired
};

export default FilterPanel;
