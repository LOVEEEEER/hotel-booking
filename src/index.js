import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { Router } from "react-router-dom";
import "./app/styles/links.scss";
import "./app/styles/index.css";
import { Provider } from "react-redux";
import createStore from "./app/store/createStore";
import history from "./app/utils/history";

const store = createStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <Router history={history}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Router>
    </Provider>
);
