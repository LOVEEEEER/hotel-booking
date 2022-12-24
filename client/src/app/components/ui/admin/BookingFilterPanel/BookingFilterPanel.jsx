import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "../../../../hooks/useForm";
import {
    getFormatDate,
    getPresenceBookingDate
} from "../../../../utils/dateService";
import DatePicker from "../../../common/form/DatePicker";
import sessionStorageService from "../../../../services/sessionStorage.service";
import { ADMIN_FILTER_KEY } from "../../../../constants/sessionStorageServiceConfig";

const BookingFilterPanel = ({ rooms, onFilterQuery }) => {
    const storageData =
        sessionStorageService.fromSessionStorage(ADMIN_FILTER_KEY);
    const { data, handleChange } = useForm(
        !storageData
            ? {
                  entry: getPresenceBookingDate(0),
                  departure: getPresenceBookingDate(1)
              }
            : storageData
    );
    useEffect(() => {
        onFilterQuery(data, rooms);
    }, [data, rooms]);
    return (
        <div className="admin__dates">
            <div className="admin__date-fields">
                <DatePicker
                    name="entry"
                    value={data.entry}
                    label="Заезд"
                    onChange={handleChange}
                />
                <DatePicker
                    name="departure"
                    value={data.departure}
                    label="Выезд"
                    onChange={handleChange}
                />
            </div>
            {data.entry && data.departure && (
                <h3 className="admin__booking-date">
                    Номера доступные для бронирования на{" "}
                    {getFormatDate(data.entry)} -{" "}
                    {getFormatDate(data.departure)}
                </h3>
            )}
        </div>
    );
};

BookingFilterPanel.propTypes = {
    onFilterQuery: PropTypes.func.isRequired,
    rooms: PropTypes.array.isRequired
};

export default BookingFilterPanel;
