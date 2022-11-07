import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { loadRooms } from "./store/rooms";
import { loadUsers } from "./store/users";
import { useDispatch } from "react-redux";
import routes from "./routes";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadRooms());
        dispatch(loadUsers());
    }, []);
    const elements = useRoutes(routes);
    return elements;
}

export default App;
