import React from "react";
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

export default Rating;
