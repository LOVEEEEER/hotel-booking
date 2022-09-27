import Rooms from "./layouts/Rooms";
import Login from "./layouts/Login";
import Main from "./layouts/Main";

const routes = [
    { path: "/", component: Main, exact: true },
    { path: "/rooms/:roomId?", component: Rooms, name: "Номера" },
    { path: "/login/:type", component: Login }
];

export default routes;
