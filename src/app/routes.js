import Rooms from "./layouts/Rooms";
import Login from "./layouts/Login";

const routes = [
  { path: "/rooms/:roomId?", component: Rooms, name: "Номера" },
  { path: "/login/:type", component: Login },
  { path: "/", component: Rooms, exact: true },
];

export default routes;
