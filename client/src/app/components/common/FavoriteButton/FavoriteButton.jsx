import React from "react";
import PropTypes from "prop-types";
import Fab from "@mui/material/Fab";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { styled } from "@mui/material";

const FavoriteButtonStyled = styled(Fab)(() => ({
    backgroundColor: "rgb(134, 118, 226)",
    color: "#FFFFFF",
    "&:hover": {
        backgroundColor: "rgb(110, 87, 238)"
    },
    zIndex: "1"
}));

const FavoriteButton = ({ isFavorite, ...rest }) => {
    return (
        <FavoriteButtonStyled
            size="small"
            sx={{
                backgroundColor: "rgb(134, 118, 226)",
                color: "#FFFFFF"
            }}
            {...rest}
            aria-label="like"
        >
            {!isFavorite ? <FavoriteBorderIcon /> : <FavoriteIcon />}
        </FavoriteButtonStyled>
    );
};

FavoriteButton.propTypes = {
    isFavorite: PropTypes.bool
};

export default FavoriteButton;
