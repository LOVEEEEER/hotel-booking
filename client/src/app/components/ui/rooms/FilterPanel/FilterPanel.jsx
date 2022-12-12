import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "../../../../hooks/useForm";
import { getPresenceBookingDate } from "../../../../utils/dateService";
import Button from "../../../common/Button";
import DatePicker from "../../../common/form/DatePicker";

const FilterPanel = ({ onFilterQuery }) => {
    const { data, handleChange, lastChangeName } = useForm({
        entry: getPresenceBookingDate(1),
        departure: getPresenceBookingDate(2)
    });
    useEffect(() => {
        onFilterQuery(lastChangeName, data);
    }, [data]);
    return (
        <div className="filter-panel__block">
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
            <Button sx={{ width: "100%" }}>Сбросить фильтры</Button>
        </div>
    );
};

FilterPanel.propTypes = {
    onFilterQuery: PropTypes.func.isRequired
};

export default FilterPanel;
