import React from "react";
import {
    Breadcrumbs as BreadcrumbsMUI,
    Link as LinkMUI,
    styled,
    Typography
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "../Container";

const BreadcrumbsStyled = styled(BreadcrumbsMUI)(() => ({
    display: "inline-block",
    marginTop: "12px",
    "&:hover": {
        cursor: "pointer"
    }
}));

const LinkStyled = styled(LinkMUI)(() => ({
    color: "#302f2f",
    textDecoration: "none",
    transition: "0.1s color linear",
    "&:hover": {
        color: "rgb(161, 183, 245)"
    }
}));

const TypographyStyled = styled(Typography)(() => ({
    color: "rgb(126, 160, 255)",
    "&:hover": {
        cursor: "text"
    }
}));

const Breadcrumbs = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    const pathnames = pathname.split("/").filter((item) => item);
    const capatilize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

    const getTranslatedName = (name: string) => {
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
        <Container>
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
        </Container>
    );
};

export default Breadcrumbs;
