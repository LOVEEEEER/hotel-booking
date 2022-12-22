import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { Rating as RatingMUI, styled } from "@mui/material";

const RatingStyled = styled(RatingMUI)(() => ({
    color: "rgb(247, 164, 255)"
}));

const Rating = ({ value, label, ...rest }) => {
    return (
        <>
            <Typography component="legend">{label}</Typography>
            <RatingStyled value={Number(value)} {...rest} />
        </>
    );
};

Rating.propTypes = {
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Rating;
