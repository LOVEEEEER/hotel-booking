import Rooms from "./layouts/Rooms";
import Login from "./layouts/Login";
import Main from "./layouts/Main";
import UserProfile from "./layouts/UserProfile";
import Admin from "./layouts/Admin";

const routes = [
    { path: "/", exact: true, component: Main },
    { path: "/rooms/:roomId?", exact: false, component: Rooms },
    { path: "/login/:type", exact: false, component: Login },
    {
        path: "/users/:userId?",
        exact: false,
        component: UserProfile,
        isProtect: true
    },
    {
        path: "/admin",
        exact: false,
        component: Admin,
        isProtect: true
    }
];

export default routes;
