import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "../../../../hooks/useForm";
import { getPresenceBookingDate } from "../../../../utils/dateService";
import Button from "../../../common/Button";
import DatePicker from "../../../common/form/DatePicker";
import { useSelector } from "react-redux";
import { getRoomsLoading } from "../../../../store/slices/rooms";
import { getBookingLoading } from "../../../../store/slices/booking";

const FilterPanel = ({ onFilterQuery }) => {
    const roomsLoading = useSelector(getRoomsLoading());
    const bookingLoading = useSelector(getBookingLoading());
    const { data, handleChange, lastChangeName } = useForm({
        entry: getPresenceBookingDate(1),
        departure: getPresenceBookingDate(2)
    });
    useEffect(() => {
        if (!roomsLoading && !bookingLoading) {
            onFilterQuery(lastChangeName || "entry", data);
        }
    }, [data, roomsLoading, bookingLoading]);
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
