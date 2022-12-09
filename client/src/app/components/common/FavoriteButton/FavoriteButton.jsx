import React from "react";
import Fab from "@mui/material/Fab";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { styled } from "@mui/material";

const FavoriteButtonStyled = styled(Fab)(() => ({
    backgroundColor: "rgb(134, 118, 226)",
    color: "#FFFFFF",
    "&:hover": {
        backgroundColor: "rgb(110, 87, 238)"
    }
}));

const FavoriteButton = ({ ...rest }) => {
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
            <FavoriteIcon />
        </FavoriteButtonStyled>
    );
};

export default FavoriteButton;
