import React from "react";
import { Route, Switch } from "react-router-dom";
// import routes from "./routes";
import Error from "./layouts/Error";
import AuthProvider from "./hooks/useAuth";
import Main from "./layouts/Main";
import Rooms from "./layouts/Rooms";
import Login from "./layouts/Login";
import UserProfile from "./layouts/UserProfile";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Admin from "./layouts/Admin";

function App() {
    return (
        <>
            <AuthProvider>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/rooms/:roomId?" component={Rooms} />
                    <Route path="/login/:type" component={Login} />
                    <ProtectedRoute
                        path="/users/:userId?"
                        component={UserProfile}
                    />
                    <ProtectedRoute
                        path="/admin"
                        isAdmin={true}
                        component={Admin}
                    />
                    <Route component={Error} />
                </Switch>
            </AuthProvider>
        </>
    );
}

export default App;
