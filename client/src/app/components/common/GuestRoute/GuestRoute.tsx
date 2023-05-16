import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getIsLoggedIn } from "../../../store/users/usersSelectors";

type GuestRouteProps = {
    children: React.ReactNode;
    to?: string;
};

const GuestRoute: React.FC<GuestRouteProps> = ({ children, to = "/rooms" }) => {
    const location = useLocation();
    const isLoggedIn = useSelector(getIsLoggedIn());
    if (isLoggedIn) {
        return (
            <Navigate
                to={location.state ? location.state.from.pathname : null || to}
            />
        );
    }
    return <>{children}</>;
};

export default GuestRoute;
