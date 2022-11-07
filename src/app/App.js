import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import routes from "./routes";
import Error from "./layouts/Error";
import Main from "./layouts/Main";
import Rooms from "./layouts/Rooms";
import Login from "./layouts/Login";
import UserProfile from "./layouts/UserProfile";
// import ProtectedRoute from "./components/common/ProtectedRoute";
import Admin from "./layouts/Admin";
import { loadRooms } from "./store/rooms";
import { loadUsers } from "./store/users";
import { useDispatch } from "react-redux";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadRooms());
        dispatch(loadUsers());
    }, []);
    return (
        <>
            <Routes>
                <Route path="" element={<Main />} />
                <Route path="rooms/*" element={<Rooms />} />
                <Route path="login/*" element={<Login />} />
                <Route path="users/:userId?" element={<UserProfile />} />
                {/* protected */}
                <Route path="admin" isAdmin={true} element={<Admin />} />
                {/* protected */}
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
}

export default App;
