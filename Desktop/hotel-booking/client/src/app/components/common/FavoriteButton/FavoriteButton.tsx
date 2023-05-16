import React from "react";
import { Fab, styled } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const FavoriteButtonStyled = styled(Fab)(() => ({
    backgroundColor: "rgb(134, 118, 226)",
    color: "#FFFFFF",
    "&:hover": {
        backgroundColor: "rgb(110, 87, 238)"
    },
    zIndex: "1"
}));

type FavoriteButtonProps = {
    isFavorite: boolean;
    onClick?: () => void;
};

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
    isFavorite,
    ...rest
}) => {
    return (
        <FavoriteButtonStyled
            size="small"
            sx={{
                backgroundColor: "rgb(134, 118, 226)",
                color: "#FFFFFF"
            }}
            aria-label="like"
            {...rest}
        >
            {!isFavorite ? <FavoriteBorderIcon /> : <FavoriteIcon />}
        </FavoriteButtonStyled>
    );
};

export default FavoriteButton;
