import React, { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "./store/createStore";
import { useSelector } from "react-redux";
import { loadRoomsList } from "./store/rooms/roomsActions";
import { getIsLoggedIn } from "./store/users/usersSelectors";
import { loadUsersList } from "./store/users/usersActions";
import { loadBookingList } from "./store/booking/bookingActions";
import { loadCommentsList } from "./store/comments/commentsActions";
import { loadFavoritesList } from "./store/favorites/favoritesActions";

function App() {
    const dispatch = useAppDispatch();
    const elements = useRoutes(routes);
    const isLoggedIn = useSelector(getIsLoggedIn());
    useEffect(() => {
        dispatch(loadRoomsList());
        dispatch(loadUsersList());
        dispatch(loadBookingList());
        dispatch(loadCommentsList());
        if (isLoggedIn) {
            dispatch(loadFavoritesList());
        }
    }, [isLoggedIn]);

    return (
        <>
            {elements}
            <ToastContainer />
        </>
    );
}

export default App;
