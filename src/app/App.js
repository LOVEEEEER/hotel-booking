import { Route } from "react-router-dom";
import Main from "./layouts/Main";
import Rooms from "./layouts/Rooms";
import Error from "./layouts/Error";

function App() {
  return (
    <>
      <Route path="/rooms/:roomId?" component={Rooms} />
      <Route path="/" exact component={Main} />
      <Route component={Error} />
    </>
  );
}

export default App;
