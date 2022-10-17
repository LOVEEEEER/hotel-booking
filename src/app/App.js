import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import Error from "./layouts/Error";
import AuthProvider from "./hooks/useAuth";
import CommentsProvider from "./hooks/useComments";

const getRoutes = (routes) => {
    return routes.map((prop, key) => (
        <Route
            path={prop.path}
            component={prop.component}
            exact={prop.exact}
            key={key}
        />
    ));
};

function App() {
    return (
        <CommentsProvider>
            <AuthProvider>
                <Switch>
                    {getRoutes(routes)}
                    <Route component={Error} />
                </Switch>
            </AuthProvider>
        </CommentsProvider>
    );
}

export default App;
