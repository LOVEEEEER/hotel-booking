import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import routes from "./routes";
import Error from "./layouts/Error";
import Main from "./layouts/Main";
import Rooms from "./layouts/Rooms";
import Login from "./layouts/Login";
// import UserProfile from "./layouts/UserProfile";
// import ProtectedRoute from "./components/common/ProtectedRoute";
// import Admin from "./layouts/Admin";
import { loadRooms } from "./store/rooms";
import { loadUsers } from "./store/users";
import { useDispatch } from "react-redux";
import RoomPage from "./components/page/RoomPage";
import RoomsListPage from "./components/page/RoomsListPage";
import SignUpPage from "./components/page/SignUpPage";
import SignInPage from "./components/page/SignInPage";
import UserProfilePage from "./components/page/UserProfilePage";
import ProtectedRoute from "./components/common/ProtectedRoute/ProtectedRoute";
import UserProfile from "./layouts/UserProfile";
import Admin from "./layouts/Admin";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadRooms());
        dispatch(loadUsers());
    }, []);
    // return (
    //     <>
    //         <Routes>
    //             <Route path="" element={<Main />} />
    //             <Route path="rooms/*" element={<Rooms />} />
    //             <Route path="login/*" element={<Login />} />
    //             <Route path="users/:userId?" element={<UserProfile />} />
    //             {/* protected */}
    //             <Route path="admin" isAdmin={true} element={<Admin />} />
    //             {/* protected */}
    //             <Route path="*" element={<Error />} />
    //         </Routes>
    //     </>
    // );

    return (
        <>
            <Routes>
                <Route index element={<Main />} />
                <Route path="rooms" element={<Rooms />}>
                    <Route index element={<RoomsListPage />} />
                    <Route path=":roomId" element={<RoomPage />} />
                </Route>
                <Route path="login" element={<Login />}>
                    <Route index element={<Navigate to="/login/signin" />} />
                    <Route path="signup" element={<SignUpPage />} />
                    <Route path="signin" element={<SignInPage />} />
                </Route>
                <Route path="users" element={<UserProfile />}>
                    <Route index element={<Navigate to="/rooms" />} />
                    <Route
                        path=":userId"
                        element={
                            <ProtectedRoute>
                                <UserProfilePage />
                            </ProtectedRoute>
                        }
                    />
                </Route>
                <Route
                    path="admin"
                    element={
                        <ProtectedRoute isAdmin={true} to="/rooms">
                            <Admin />
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
}

export default App;
