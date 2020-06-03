/*
    Index file
    Main entry point for the Clever-Game App
*/

import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";

import store from "./store/store";
import App from "./components/App";
import './scss/main.scss';

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById("root")
);