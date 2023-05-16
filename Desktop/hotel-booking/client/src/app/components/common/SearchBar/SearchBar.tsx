import React from "react";
import TextField from "../fields/TextField";

type SearchBarProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
    return (
        <TextField
            name="searchQuery"
            label="Поиск по номеру..."
            type="search"
            {...{ onChange }}
        />
    );
};

export default SearchBar;
