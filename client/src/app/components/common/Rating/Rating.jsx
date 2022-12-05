import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { Rating as RatingMUI, styled } from "@mui/material";

const RatingStyled = styled(RatingMUI)(({ theme }) => ({
    color: "rgb(247, 164, 255)"
}));

const Rating = ({ value, label, ...rest }) => {
    return (
        <>
            <Typography component="legend">{label}</Typography>
            <RatingStyled value={value} precision={0.5} {...rest} />
        </>
    );
};

Rating.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string
};

export default Rating;