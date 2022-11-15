import { useEffect } from "react";
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

    return elements;
}

export default App;
