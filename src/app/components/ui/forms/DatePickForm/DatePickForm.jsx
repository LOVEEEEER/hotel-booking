import React from "react";
import PropTypes from "prop-types";
import DatePicker from "../../../common/form/DatePicker";

const DatePickForm = ({ data, onChange, errors }) => {
    return (
        <div className="room-info__booking_input-group">
            <DatePicker
                sx={{ marginRight: "20px", width: "170px" }}
                value={data.entry}
                onChange={onChange}
                label="Заезд"
                error={Boolean(errors.entry)}
                helperText={errors.entry}
                name="entry"
            />
            <DatePicker
                sx={{ marginRight: "20px", width: "170px" }}
                value={data.departure}
                onChange={onChange}
                label="Выезд"
                error={Boolean(errors.departure)}
                helperText={errors.departure}
                name="departure"
            />
        </div>
    );
};

DatePickForm.propTypes = {
    data: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

export default DatePickForm;
