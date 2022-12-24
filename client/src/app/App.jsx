import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRoutes } from "react-router-dom";
import { loadRooms } from "./store/slices/rooms";
import { getIsLoggedIn, loadUsers } from "./store/slices/users";
import { useDispatch, useSelector } from "react-redux";
import routes from "./routes";
import { loadBooking } from "./store/slices/booking";
import { loadFavorites } from "./store/slices/favorites";
import { loadComments } from "./store/slices/comments";

function App() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn());
    useEffect(() => {
        dispatch(loadRooms());
        dispatch(loadUsers());
        dispatch(loadBooking());
        dispatch(loadComments());
        if (isLoggedIn) {
            dispatch(loadFavorites());
        }
    }, [isLoggedIn]);

    const elements = useRoutes(routes);
    return (
        <>
            {elements}
            <ToastContainer />
        </>
    );
}

export default App;
