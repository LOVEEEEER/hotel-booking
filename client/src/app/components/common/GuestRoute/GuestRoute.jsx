import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../../store/slices/users";
import { Navigate, useLocation } from "react-router-dom";

const GuestRoute = ({ children, to }) => {
    const location = useLocation();
    const isLoggedIn = useSelector(getIsLoggedIn());
    if (isLoggedIn) {
        return (
            <Navigate
                to={location.state ? location.state.from.pathname : null || to}
            />
        );
    }
    return children;
};

GuestRoute.defaultProps = {
    to: "/rooms"
};

GuestRoute.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]).isRequired,
    to: PropTypes.string.isRequired
};

export default GuestRoute;
