import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import {
    getCurrentUser,
    getIsLoggedIn,
    getUsersLoadingStatus
} from "../../../store/users/usersSelectors";

type ProtectedRouteProps = {
    children: React.ReactNode;
    isAdmin?: boolean;
    to?: string;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    children,
    isAdmin,
    to = "/login/signin"
}) => {
    const usersLoading = useSelector(getUsersLoadingStatus());
    const isLoggedIn = useSelector(getIsLoggedIn());
    const location = useLocation();
    const currentUser = useSelector(getCurrentUser());

    if (!usersLoading) {
        if (isLoggedIn) {
            if (isAdmin) {
                if (currentUser?.isAdmin) {
                    return <>{children}</>;
                }
            } else {
                return <>{children}</>;
            }
        }
        return <Navigate to={to} state={{ from: location }} />;
    }
    return <></>;
};

export default ProtectedRoute;
