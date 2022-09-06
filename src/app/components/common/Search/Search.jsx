import React from "react";
import TextField from "../TextField";

const Search = ({ onChange, value, ...rest }) => {
  return (
    <TextField
      name="searchQuery"
      label="Поиск по номеру..."
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Search;
