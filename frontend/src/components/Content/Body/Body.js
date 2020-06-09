/*
    Body Component
    Component that manage the main content of the app
*/

import React, { Fragment } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';

import Button from '../../UI/Button/Button';
import SignIn from './SignIn/SignIn';


const Body = props => {
    return (
        <div className='body'>
            <p>Hello</p>
            <Switch>
                {/* <Route exact path='/' component={Home} /> */}
                <Route exact path='/signin' component={SignIn} />
                {/* <Route path='/signup' component={SignUp} /> */}
                {/* <Redirect to='/' />  */}
            </Switch>
        </div>
    );
};

export default Body;