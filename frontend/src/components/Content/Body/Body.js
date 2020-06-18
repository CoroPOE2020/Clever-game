/*
    Body Component
    Component that manage the main content of the app
*/

import React, { Fragment } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from './Home/Home.js';
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';
import Games from './Games/Games';
import Game from './Game/Game';


const Body = props => {
    return (
        <div className='body'>
            <Switch>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/signin' component={SignIn} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/games' component={Games} />
                <Route exact path='/game' component={Game} />
                {/* <Route path='/signup' component={SignUp} /> */}
                {/* <Redirect to='/' />  */}
            </Switch>
        </div>
    );
};

export default Body;