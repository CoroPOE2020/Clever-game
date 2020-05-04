import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";

// import store from "./store/store";

import App from "./App";

import './scss/main.scss';
console.log('toto')

ReactDOM.render(<App />, document.getElementById("root"))
