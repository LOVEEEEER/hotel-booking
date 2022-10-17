import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const ProtectedRoute = ({ component: Component, ...rest }) => {
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
                        return <Component />;
                    }}
                />
            )}
        </>
    );
};

ProtectedRoute.propTypes = {
    component: PropTypes.func,
    location: PropTypes.object
};

export default ProtectedRoute;
