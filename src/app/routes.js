import Rooms from "./layouts/Rooms";
import Login from "./layouts/Login";
import Main from "./layouts/Main";
import UserProfile from "./layouts/UserProfile";

const routes = [
    { path: "/", component: Main, exact: true, active: true },
    { path: "/rooms/:roomId?", component: Rooms, name: "Номера" },
    { path: "/profile", component: UserProfile },
    { path: "/login/:type", component: Login }
];

export default routes;
