import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import {
    getCurrentUser,
    getIsLoading,
    getIsLoggedIn
} from "../../../store/users";

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
    // return (
    //     <>
    //         {!isLoading && (
    //             <Route
    //                 {...rest}
    //                 render={(props) => {
    //                     if (!currentUser) {
    //                         return (
    //                             <Redirect
    //                                 to={{
    //                                     pathname: "/login/signin",
    //                                     state: {
    //                                         from: props.location
    //                                     }
    //                                 }}
    //                             />
    //                         );
    //                     }
    //                     if (isAdmin === undefined) {
    //                         return <Component />;
    //                     }
    //                     if (isAdmin) {
    //                         if (currentUser.isAdmin) {
    //                             return <Component />;
    //                         } else {
    //                             return <Redirect to="/" />;
    //                         }
    //                     }
    //                 }}
    //             />
    //         )}
    //     </>
    // );

    if (!isLoading) {
        if (isLoggedIn) {
            if (isAdmin) {
                if (currentUser.isAdmin) {
                    return children;
                }
            } else {
                if (isLoggedIn) {
                    return children;
                }
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
