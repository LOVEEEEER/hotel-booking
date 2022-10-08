import React from "react";
import PropTypes from "prop-types";
import TextField from "../../../common/form/TextField";

const DatePickForm = ({ data, onChange, errors }) => {
    const handleChange = (e) => {
        const {
            nativeEvent: { data: lastOne },
            target: { name, value }
        } = e;
        if (!Number.isNaN(Number(lastOne)) && value.length < 11) {
            const fakeTarget = {
                target: {
                    name: name,
                    value:
                        (value.length === 2 || value.length === 5) &&
                        value.length > data[name].length
                            ? `${value}.`
                            : value
                }
            };
            onChange(fakeTarget);
        }
    };
    return (
        <div className="room-info__booking_input-group">
            <TextField
                value={data.entry}
                onChange={handleChange}
                label="Заезд"
                name="entry"
                sx={{ marginRight: "20px", width: "170px" }}
                placeholder={"XX.XX.XXXX"}
                error={Boolean(errors.entry)}
            />
            <TextField
                value={data.departure}
                onChange={handleChange}
                label="Выезд"
                name="departure"
                placeholder={"XX.XX.XXXX"}
                error={Boolean(errors.departure)}
                sx={{ width: "170px" }}
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
