import React from "react";
import TextField from "../../common/TextField";

const DatePickForm = ({ data, onChange, errors }) => {
  return (
    <div className="room-info__booking_input-group">
      <TextField
        value={data.entry}
        onChange={onChange}
        label="Заезд"
        name="entry"
        sx={{ marginRight: "20px", width: "170px" }}
        placeholder={"XX.XX.XXXX"}
        error={Boolean(errors.entry)}
      />
      <TextField
        value={data.departure}
        onChange={onChange}
        label="Выезд"
        name="departure"
        placeholder={"ЧИСЛО.МЕСЯЦ.ГОД"}
        error={Boolean(errors.departure)}
        sx={{ width: "170px" }}
      />
    </div>
  );
};

export default DatePickForm;
