import PropTypes from "prop-types";
// import debounce from "lodash.debounce";
import { useState, useEffect } from "react";

export const useDebounce = ({ value }) => {
    const [value, setValue] = useState();
    useEffect(() => {
        const timer = setTimeout(() => {
            setValue(value);
        }, 500);
        return () => {
            clearTimeout(timer);
        };
    }, [value]);
};

useDebounce.propTypes = {
    value: PropTypes.string.isRequired
};
