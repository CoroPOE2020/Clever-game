/*
    App Component
    Main Component of the Clever-Game
*/

import React, { Fragment } from "react";

import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Body from './Content/Body/Body';
import Header from './Content/Header/Header';
import Footer from './Content/Footer/Footer';

// import Test from './Test/Test';


const App = props => {
    return (
        <Router>
            <Header />
            <Body />
            <Footer />
        </Router>
    );
};

export default App;