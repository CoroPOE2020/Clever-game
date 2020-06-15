/*
    SignIn Component
    Component that allows an user to connect to Clever Game
*/

import React, { Fragment } from "react";
import Button from '../../../UI/Button/Button';


const SignIn = props => {
    console.log('Dans le composant SignIN')
    return (
        <Fragment>
            <div className="divtest1"></div>
            <div className="divtest2">
                <Button
                    disabled="no"
                    submit="no" 
                    btnClass="cancel" >
                    {/* clicked={handleClick}> */}
                    Cancel
                </Button>
            </div>
        </Fragment>
    );
};

export default SignIn;