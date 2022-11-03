import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import BreadcrumbsMui from "@mui/material/Breadcrumbs";
import LinkMui from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import HotelIcon from "@mui/icons-material/Hotel";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { styled } from "@mui/material";

const BreadcrumbsStyled = styled(BreadcrumbsMui)(() => ({
    "&:hover": {
        cursor: "pointer"
    }
}));

const Breadcrumbs = (props) => {
    const {
        history,
        location: { pathname }
    } = props;
    const crumbs = {
        rooms: {
            name: "Номера",
            icon: <HotelIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        }
    };
    const pathnames = pathname.split("/").filter((x) => x);
    return (
        <BreadcrumbsStyled
            separator={<NavigateNextIcon fontSize="small" />}
            sx={{ paddingTop: "20px" }}
            aria-label="breadcrumb"
        >
            {pathnames.length > 0 ? (
                <LinkMui
                    underline="hover"
                    color="inherit"
                    sx={{ display: "flex", alignItems: "center" }}
                    onClick={() => history.push("/")}
                >
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Главная
                </LinkMui>
            ) : (
                <Typography> Главная </Typography>
            )}
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;

                return isLast ? (
                    <Typography
                        sx={{ display: "flex", alignItems: "center" }}
                        color="text.primary"
                        key={name}
                    >
                        {crumbs[name]?.icon || (
                            <RoomServiceIcon
                                sx={{ mr: 0.5 }}
                                fontSize="inherit"
                            />
                        )}
                        {crumbs[name]?.name || "Выбор отеля"}
                    </Typography>
                ) : (
                    <LinkMui
                        key={name}
                        underline="hover"
                        color="inherit"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            textTransform: "capitalize"
                        }}
                        role="button"
                        onClick={() => history.push(routeTo)}
                    >
                        {crumbs[name]?.icon || (
                            <RoomServiceIcon
                                sx={{ mr: 0.5 }}
                                fontSize="inherit"
                            />
                        )}
                        {crumbs[name]?.name || "Выбор отеля"}
                    </LinkMui>
                );
            })}
        </BreadcrumbsStyled>
    );
};

Breadcrumbs.propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

export default Breadcrumbs;
