import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import Error from "./layouts/Error";
import useMockData from "./utils/mockData";

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
    const { initialize } = useMockData();
    initialize();
    return (
        <>
            <Switch>
                {getRoutes(routes)}
                <Route component={Error} />
            </Switch>
        </>
    );
}

export default App;
