import { debounce } from "lodash";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
    breakfastList,
    categoriesList,
    comfortList
} from "../../../../constants/appFiltersConfig";
import { USER_FILTER_KEY } from "../../../../constants/sessionStorageServiceConfig";
import useForm from "../../../../hooks/useForm";
import sessionStorageService from "../../../../services/sessionStorage.service";
import { getPresenceBookingDate } from "../../../../utils/dateService";
import Button from "../../../common/Button";
import CheckboxField from "../../../common/fields/CheckboxField";
import DatePickerField from "../../../common/fields/DatePickerField";
import { getRoomsLoadingStatus } from "../../../../store/rooms/roomsSelectors";
import { getBookingLoadingStatus } from "../../../../store/booking/bookingSelectors";

export const filtersInitialState = {
    entry: getPresenceBookingDate(1) as Date,
    departure: getPresenceBookingDate(2) as Date,
    comfort: [] as string[],
    breakfast: [] as string[],
    categories: [] as string[]
};

type RoomsFiltersProps = {
    onFilterQuery: (filters: typeof filtersInitialState) => void;
};

const storageData: typeof filtersInitialState | null =
    sessionStorageService.fromSessionStorage(USER_FILTER_KEY);

const RoomsFilters: React.FC<RoomsFiltersProps> = ({ onFilterQuery }) => {
    const { data, handleChange, setData } = useForm(
        !storageData ? filtersInitialState : storageData
    );
    const roomsLoading = useSelector(getRoomsLoadingStatus());
    const bookingLoading = useSelector(getBookingLoadingStatus());
    useEffect(() => {
        const isAvaibleToFilter = !roomsLoading && !bookingLoading;
        if (isAvaibleToFilter) {
            onFilterQuery(data);
        }
    }, [data, roomsLoading, bookingLoading]);
    const handleResetFilters = () => {
        setData(filtersInitialState);
    };
    const handleDateChange = debounce(handleChange, 180);
    return (
        <div className="filter-panel__block">
            <ul className="filter-panel__list">
                <li className="filter-panel__item">
                    <h3 className="filter-panel__filter-title">Пребывание</h3>
                    <DatePickerField
                        name="entry"
                        value={data.entry}
                        onChange={handleDateChange}
                        sx={{ marginBottom: "15px" }}
                        label="Заезд"
                        minDate={new Date()}
                    />
                    <DatePickerField
                        name="departure"
                        value={data.departure}
                        onChange={handleDateChange}
                        sx={{ marginBottom: "15px" }}
                        label="Выезд"
                        minDate={new Date()}
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

export default RoomsFilters;
