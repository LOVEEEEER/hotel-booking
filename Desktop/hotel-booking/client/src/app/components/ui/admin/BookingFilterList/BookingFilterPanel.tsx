import { debounce } from "lodash";
import React, { useEffect } from "react";
import { FiltersType } from "../../../../hooks/useFiltersQuery";
import useForm from "../../../../hooks/useForm";
import { Room } from "../../../../types/types";
import {
    getFormatDate,
    getPresenceBookingDate
} from "../../../../utils/dateService";
import DatePickerField from "../../../common/fields/DatePickerField";

type BookingFilterListProps = {
    rooms: Room[];
    onFilterQuery: (filters: FiltersType) => void;
};

const BookingFilterPanel: React.FC<BookingFilterListProps> = ({
    rooms,
    onFilterQuery
}) => {
    const { data, handleChange } = useForm({
        entry: getPresenceBookingDate(1),
        departure: getPresenceBookingDate(2)
    });
    useEffect(() => {
        onFilterQuery(data);
    }, [data, rooms]);
    const handleDateChange = debounce(handleChange, 180);
    return (
        <div className="admin__dates">
            <div className="admin__date-fields">
                <DatePickerField
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
                <DatePickerField
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

export default BookingFilterPanel;
