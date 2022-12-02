import React from "react";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "./components/common/ProtectedRoute/ProtectedRoute";
import RoomPage from "./components/page/RoomPage";
import RoomsListPage from "./components/page/RoomsListPage";
import SignInPage from "./components/page/SignInPage";
import SignUpPage from "./components/page/SignUpPage";
import UserProfilePage from "./components/page/UserProfilePage";
import Admin from "./layouts/Admin";
import Error from "./layouts/Error";
import Favorites from "./layouts/Favorites";
import Login from "./layouts/Login";
import Main from "./layouts/Main";
import Rooms from "./layouts/Rooms";
import UserBooking from "./layouts/UserBooking";
import UserProfile from "./layouts/UserProfile";

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
        element: <Login />,
        children: [
            { path: "", element: <SignUpPage /> },
            { path: "signup", element: <SignUpPage /> },
            { path: "signin", element: <SignInPage /> }
        ]
    },
    {
        path: "users",
        element: <UserProfile />,
        children: [
            { path: "", element: <Navigate to="rooms" /> },
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
            <ProtectedRoute>
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
        path: "*",
        element: <Error />
    },
    {
        path: "favorites",
        element: <Favorites />
    }
];

export default routes;
