import React from "react";
import TextField from "../../../common/TextField";

const DatePickForm = ({ data, onChange, errors }) => {
  const handleChange = (e) => {
    const {
      nativeEvent: { data: lastOne },
      target: { name, value },
    } = e;
    if (!Number.isNaN(Number(lastOne))) {
      onChange({
        [name]:
          (value.length === 2 || value.length === 5) &&
          value.length > data[name].length
            ? `${value}.`
            : value,
      });
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

export default DatePickForm;
