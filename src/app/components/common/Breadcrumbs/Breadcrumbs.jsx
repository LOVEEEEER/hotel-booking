import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import BreadcrumbsMui from "@mui/material/Breadcrumbs";
import LinkMui from "@mui/material/Link";

const Breadcrumbs = (props) => {
    const {
        history,
        location: { pathname }
    } = props;
    const crumbs = {
        rooms: {
            name: "Номера"
        }
    };
    const pathnames = pathname.split("/").filter((x) => x);
    return (
        <BreadcrumbsMui sx={{ paddingTop: "20px" }} aria-label="breadcrumb">
            {pathnames.length > 0 ? (
                <LinkMui
                    underline="hover"
                    color="inherit"
                    onClick={() => history.push("/")}
                >
                    Главная
                </LinkMui>
            ) : (
                <Typography> Главная </Typography>
            )}
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;

                return isLast ? (
                    <Typography color="text.primary" key={name}>
                        {crumbs[name]?.name || "Выбор отеля"}
                    </Typography>
                ) : (
                    <LinkMui
                        sx={{ textTransform: "capitalize" }}
                        key={name}
                        underline="hover"
                        color="inherit"
                        role="button"
                        onClick={() => history.push(routeTo)}
                    >
                        {crumbs[name]?.name}
                    </LinkMui>
                );
            })}
        </BreadcrumbsMui>
    );
};

Breadcrumbs.propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

export default Breadcrumbs;
