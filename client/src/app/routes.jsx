import React from "react";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "./components/common/ProtectedRoute/ProtectedRoute";
import RoomPage from "./components/page/RoomPage";
import RoomsListPage from "./components/page/RoomsListPage";
import SignInPage from "./components/page/SignInPage";
import SignUpPage from "./components/page/SignUpPage";
import UserPage from "./components/page/UserPage";
import Admin from "./layouts/Admin";
import Error from "./layouts/Error";
import Favorites from "./layouts/Favorites";
import Login from "./layouts/Login";
import Main from "./layouts/Main";
import Rooms from "./layouts/Rooms";
import UserBooking from "./layouts/UserBooking";
import User from "./layouts/User";
import GuestRoute from "./components/common/GuestRoute";

const routes = [
    {
        path: "",
        element: <Main />
    },
    {
        path: "rooms",
        element: <Rooms />,
        children: [
            { path: "", element: <RoomsListPage /> },
            { path: ":roomId", element: <RoomPage /> }
        ]
    },
    {
        path: "login",
        element: (
            <GuestRoute>
                <Login />
            </GuestRoute>
        ),
        children: [
            { path: "", element: <SignUpPage /> },
            { path: "signup", element: <SignUpPage /> },
            { path: "signin", element: <SignInPage /> }
        ]
    },
    {
        path: "users",
        element: <User />,
        children: [
            { path: "", element: <Navigate to="/rooms" /> },
            {
                path: ":userId",
                element: (
                    <ProtectedRoute>
                        <UserPage />
                    </ProtectedRoute>
                )
            }
        ]
    },
    {
        path: "admin",
        element: (
            <ProtectedRoute isAdmin={true} to="/rooms">
                <Admin />
            </ProtectedRoute>
        )
    },
    {
        path: "booking",
        element: (
            <ProtectedRoute>
                <UserBooking />
            </ProtectedRoute>
        )
    },
    {
        path: "favorites",
        element: (
            <ProtectedRoute>
                <Favorites />
            </ProtectedRoute>
        )
    },
    {
        path: "*",
        element: <Error />
    }
];

export default routes;
