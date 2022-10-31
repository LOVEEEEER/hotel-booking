import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const ProtectedRoute = ({ component: Component, isAdmin, ...rest }) => {
    const { currentUser, isLoading } = useAuth();
    return (
        <>
            {!isLoading && (
                <Route
                    {...rest}
                    render={(props) => {
                        if (!currentUser) {
                            return (
                                <Redirect
                                    to={{
                                        pathname: "/login/signin",
                                        state: {
                                            from: props.location
                                        }
                                    }}
                                />
                            );
                        }
                        if (isAdmin === undefined) {
                            return <Component />;
                        }
                        if (isAdmin) {
                            if (currentUser.isAdmin) {
                                return <Component />;
                            } else {
                                return <Redirect to="/" />;
                            }
                        }
                    }}
                />
            )}
        </>
    );
};

ProtectedRoute.propTypes = {
    component: PropTypes.func,
    location: PropTypes.object,
    isAdmin: PropTypes.bool
};

export default ProtectedRoute;
