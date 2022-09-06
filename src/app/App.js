import { Route } from "react-router-dom";
import Main from "./layouts/Main";
import Rooms from "./layouts/Rooms";

function App() {
  return (
    <>
      <Route path="/rooms" component={Rooms} />
      <Route path="/" exact component={Main} />
    </>
  );
}

export default App;
