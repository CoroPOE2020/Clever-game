import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";

// import store from "./store/store";

import App from "./components/App";

import './scss/main.scss';


ReactDOM.render(
        <App />,
    document.getElementById("root")
)