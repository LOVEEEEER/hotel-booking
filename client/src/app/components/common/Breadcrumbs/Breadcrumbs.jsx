import React from "react";
import Typography from "@mui/material/Typography";
import BreadcrumbsMui from "@mui/material/Breadcrumbs";
import LinkMui from "@mui/material/Link";
import { styled } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const BreadcrumbsStyled = styled(BreadcrumbsMui)(() => ({
    display: "inline-block",
    marginTop: "12px",
    "&:hover": {
        cursor: "pointer"
    }
}));

const LinkStyled = styled(LinkMui)(() => ({
    color: "#302f2f",
    textDecoration: "none"
}));

const TypographyStyled = styled(Typography)(() => ({
    color: "rgb(100 96 96 / 87%)",
    "&:hover": {
        cursor: "text"
    }
}));

const BreadCrumbs = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    const pathnames = pathname.split("/").filter((item) => item);
    const capatilize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

    const getTranslatedName = (name) => {
        switch (name.toLowerCase()) {
            case "home":
                return "Главная";
            case "rooms":
                return "Свободные номера";
            case "users":
                return "Пользователи";
            case "admin":
                return "Панель администратора";
            case "booking":
                return "Мои бронирования";
            case "favorites":
                return "Избранное";
            default:
                return name;
        }
    };

    return (
        <div>
            <BreadcrumbsStyled separator="›">
                {pathnames.length > 0 ? (
                    <LinkStyled onClick={() => navigate("/")}>
                        {getTranslatedName("Home")}
                    </LinkStyled>
                ) : (
                    <TypographyStyled color="text.primary">
                        {getTranslatedName("Home")}
                    </TypographyStyled>
                )}
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames
                        .slice(0, index + 1)
                        .join("/")}`;
                    const isLast = index === pathnames.length - 1;
                    return isLast ? (
                        <TypographyStyled color="text.primary" key={index}>
                            {getTranslatedName(capatilize(name))}
                        </TypographyStyled>
                    ) : (
                        <LinkStyled
                            key={index}
                            onClick={() => navigate(routeTo)}
                        >
                            {getTranslatedName(capatilize(name))}
                        </LinkStyled>
                    );
                })}
            </BreadcrumbsStyled>
        </div>
    );
};

export default BreadCrumbs;
