import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { Rating as RatingMUI } from "@mui/material";

const Rating = ({ value, label, ...rest }) => {
    return (
        <>
            <Typography component="legend">{label}</Typography>
            <RatingMUI value={value} precision={0.5} {...rest} />
        </>
    );
};

Rating.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.string
};

export default Rating;
