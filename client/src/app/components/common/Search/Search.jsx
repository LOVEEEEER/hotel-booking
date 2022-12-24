import React from "react";
import PropTypes from "prop-types";
import TextField from "../form/TextField";

const Search = ({ onChange, value, ...rest }) => {
    return (
        <TextField
            name="searchQuery"
            label="Поиск по номеру..."
            value={value}
            onChange={onChange}
            type="search"
            {...rest}
        />
    );
};

Search.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string
};

export default React.memo(Search);
