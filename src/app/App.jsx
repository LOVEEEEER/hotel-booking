import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRoutes } from "react-router-dom";
import { loadRooms } from "./store/rooms";
import { getCurrentUserId, getIsLoggedIn, loadUsers } from "./store/users";
import { useDispatch, useSelector } from "react-redux";
import routes from "./routes";
import { loadUserBooking } from "./store/booking";

function App() {
    const dispatch = useDispatch();
    const currentUserId = useSelector(getCurrentUserId());
    const isLoggedIn = useSelector(getIsLoggedIn());
    useEffect(() => {
        dispatch(loadRooms());
        dispatch(loadUsers());
        if (isLoggedIn) {
            dispatch(loadUserBooking(currentUserId));
        }
    }, []);
    const elements = useRoutes(routes);
    return (
        <>
            {elements}
            <ToastContainer />
        </>
    );
}

export default App;
