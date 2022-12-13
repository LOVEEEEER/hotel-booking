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

const FilterPanel = ({ onFilterQuery }) => {
    const roomsLoading = useSelector(getRoomsLoading());
    const bookingLoading = useSelector(getBookingLoading());
    const { data, handleChange, lastChangeName } = useForm({
        entry: getPresenceBookingDate(1),
        departure: getPresenceBookingDate(2),
        comfort: []
    });
    useEffect(() => {
        if (!roomsLoading && !bookingLoading) {
            onFilterQuery(lastChangeName || "entry", data);
        }
    }, [data, roomsLoading, bookingLoading]);
    const comfortList = [
        {
            id: 1,
            label: "Места для курения",
            value: "hasSmokeZone"
        },
        {
            id: 2,
            label: "Бассейн",
            value: "hasSwimmingPool"
        },
        {
            id: 3,
            label: "Банк",
            value: "hasBank"
        },
        {
            id: 4,
            label: "Wi-Fi",
            value: "hasWifi"
        },
        {
            id: 5,
            label: "Зал",
            value: "hasGym"
        },
        {
            id: 6,
            label: "Парковка",
            value: "hasParking"
        },
        {
            id: 7,
            label: "Кондинционер",
            value: "hasConditioner"
        }
    ];
    const handleCheckboxChange = ({ target }) => {
        const values = data[target.name];
        const newValue = values.includes(target.value)
            ? values.filter((item) => item !== target.value)
            : [...values, target.value];
        const fakeEvent = {
            target: {
                name: target.name,
                value: newValue
            }
        };
        handleChange(fakeEvent);
    };
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
                    {comfortList.map((comfort) => (
                        <CheckboxField
                            key={comfort.id}
                            name="comfort"
                            value={comfort.value}
                            label={comfort.label}
                            onChange={handleCheckboxChange}
                        />
                    ))}
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
