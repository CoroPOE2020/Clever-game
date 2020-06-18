/*
    Welcome Component
    Component that display a text of welcoming
*/

import React, { Fragment } from "react";
import { NavLink } from 'react-router-dom';


import Button from "../../../../UI/Button/Button";


const Welcome = props => {

    return (
        <Fragment>
            <h1 className="welcome__h1">Clever Game</h1>
            <h3 className="welcome__h3">1256 players connected on 678 rooms</h3>
            <p className="welcome__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum justo vitae velit malesuada, ac eleifend velit interdum. Cras magna lacus, lacinia id egestas et, semper vitae mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="divbuttonwelcome">
                <NavLink to="/signin"><Button btnClass="welcomebutton" >Sign In !</Button></NavLink>
                <NavLink to="/signup"><Button btnClass="welcomebutton" >Sign Up !</Button></NavLink>
            </div>
        </Fragment>
    );
};

export default Welcome;