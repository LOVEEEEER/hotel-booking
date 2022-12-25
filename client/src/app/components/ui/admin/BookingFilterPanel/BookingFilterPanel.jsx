import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "../../../../hooks/useForm";
import {
    getFormatDate,
    getPresenceBookingDate
} from "../../../../utils/dateService";
import DatePicker from "../../../common/form/DatePicker";
import debounce from "lodash.debounce";
import "./scss/booking-filter-panel.scss";

const BookingFilterPanel = ({ rooms, onFilterQuery }) => {
    const { data, handleChange } = useForm({
        entry: getPresenceBookingDate(1),
        departure: getPresenceBookingDate(2)
    });
    useEffect(() => {
        onFilterQuery(data, rooms);
    }, [data, rooms]);
    const handleDateChange = debounce(handleChange, 180);
    return (
        <div className="admin__dates">
            <div className="admin__date-fields">
                <DatePicker
                    name="entry"
                    label="Заезд"
                    value={data.entry}
                    onChange={({ target }) =>
                        handleDateChange({
                            target: {
                                value: target.value,
                                name: "entry"
                            }
                        })
                    }
                />
                <DatePicker
                    name="departure"
                    label="Выезд"
                    value={data.departure}
                    onChange={({ target }) =>
                        handleDateChange({
                            target: {
                                value: target.value,
                                name: "departure"
                            }
                        })
                    }
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
