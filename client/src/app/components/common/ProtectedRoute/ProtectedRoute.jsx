import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import {
    getCurrentUser,
    getIsLoading,
    getIsLoggedIn
} from "../../../store/slices/users";

const ProtectedRoute = ({
    children,
    isAdmin,
    to = "/login/signin",
    ...rest
}) => {
    const isLoading = useSelector(getIsLoading());
    const isLoggedIn = useSelector(getIsLoggedIn());
    const location = useLocation();
    const currentUser = useSelector(getCurrentUser());

    if (!isLoading) {
        if (isLoggedIn) {
            if (isAdmin) {
                if (currentUser.isAdmin) {
                    return children;
                }
            } else {
                return children;
            }
        }
        return <Navigate to={to} state={{ from: location }} />;
    }
};

ProtectedRoute.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]).isRequired,
    isAdmin: PropTypes.bool,
    to: PropTypes.string
};

export default ProtectedRoute;
