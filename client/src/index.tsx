import React from "react";
import ReactDOM from "react-dom/client";
import "./app/scss/index.scss";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import createStore from "./app/store/createStore";

const store = createStore();

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <BrowserRouter>
        <Provider {...{ store }}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>
    </BrowserRouter>
);
