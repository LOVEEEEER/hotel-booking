import React from "react";
import { Navigate } from "react-router-dom";
import GuestRoute from "../components/common/GuestRoute";
import ProtectedRoute from "../components/common/ProtectedRoute";
import LoginPage from "../components/pages/LoginPage";
import RegisterPage from "../components/pages/RegisterPage";
import RoomsListPage from "../components/pages/RoomsListPage";
import UserProfilePage from "../components/pages/UserProfilePage";
import Admin from "../layouts/Admin";
import Booking from "../layouts/Booking";
import Error from "../layouts/Error";
import Favorites from "../layouts/Favorites";
import Login from "../layouts/Login";
import Main from "../layouts/Main";
import Rooms from "../layouts/Rooms";
import UserProfile from "../layouts/UserProfile";
import RoomPage from "../components/pages/RoomPage";

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
            { path: "", element: <RegisterPage /> },
            { path: "signup", element: <RegisterPage /> },
            { path: "signin", element: <LoginPage /> }
        ]
    },
    {
        path: "users",
        element: <UserProfile />,
        children: [
            { path: "", element: <Navigate to="/rooms" /> },
            {
                path: ":userId",
                element: (
                    <ProtectedRoute>
                        <UserProfilePage />
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
                <Booking />
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
