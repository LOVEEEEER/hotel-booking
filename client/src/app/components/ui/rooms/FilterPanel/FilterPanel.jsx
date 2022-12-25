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
} from "../../../../constants/appFilterConfig";
import debounce from "lodash.debounce";
import sessionStorageService from "../../../../services/sessionStorage.service";
import { USER_FILTER_KEY } from "../../../../constants/sessionStorageServiceConfig";
import "./scss/filter-panel.scss";

const FilterPanel = ({ onFilterQuery }) => {
    const initialState = {
        entry: getPresenceBookingDate(1),
        departure: getPresenceBookingDate(2),
        comfort: [],
        breakfast: [],
        categories: []
    };
    const roomsLoading = useSelector(getRoomsLoading());
    const bookingLoading = useSelector(getBookingLoading());
    const storageData =
        sessionStorageService.fromSessionStorage(USER_FILTER_KEY);
    const { data, handleChange, setData } = useForm(
        !storageData ? initialState : storageData
    );
    useEffect(() => {
        const isAvaibleToFilter = !roomsLoading && !bookingLoading;
        if (isAvaibleToFilter) {
            onFilterQuery(data);
        }
    }, [data, roomsLoading, bookingLoading]);
    const handleResetFilters = () => {
        setData(initialState);
    };
    const handleDateChange = debounce(handleChange, 180);
    return (
        <div className="filter-panel__block">
            <ul className="filter-panel__list">
                <li className="filter-panel__item">
                    <h3 className="filter-panel__filter-title">Пребывание</h3>
                    <DatePicker
                        name="entry"
                        value={data.entry}
                        onChange={({ target }) =>
                            handleDateChange({
                                target: {
                                    value: target.value,
                                    name: "entry"
                                }
                            })
                        }
                        sx={{ marginBottom: "15px" }}
                        label="Заезд"
                    />
                    <DatePicker
                        name="departure"
                        value={data.departure}
                        onChange={({ target }) =>
                            handleDateChange({
                                target: {
                                    value: target.value,
                                    name: "departure"
                                }
                            })
                        }
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
            </ul>
            <Button sx={{ width: "100%" }} onClick={handleResetFilters}>
                Сбросить фильтры
            </Button>
        </div>
    );
};

FilterPanel.propTypes = {
    onFilterQuery: PropTypes.func.isRequired
};

export default FilterPanel;
