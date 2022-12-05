import React from "react";
import Fab from "@mui/material/Fab";
import FavoriteIcon from "@mui/icons-material/Favorite";

const FavouriteButton = ({ ...rest }) => {
    return (
        <Fab
            size="small"
            sx={{
                backgroundColor: "rgb(134, 118, 226)",
                color: "#FFFFFF"
            }}
            {...rest}
            aria-label="like"
        >
            <FavoriteIcon />
        </Fab>
    );
};

export default FavouriteButton;
