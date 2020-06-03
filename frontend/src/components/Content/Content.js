/*
    Content Component
*/

import React, { Fragment } from "react";

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Button from '../UI/Button/Button';

const Content = props => {

    const handleClick = () => {
        console.log('clicked !');
    }

    return (
        <Fragment>
            <Header />
            {/* Main pages */}
            <div className="divtest1"></div>
            <div className="divtest2">
                <Button
                    disabled="no" 
                    submit="no" 
                    btnClass="cancel" 
                    clicked={handleClick}>
                    Cancel
                </Button>
            </div>
            <Footer />
        </Fragment>
    );
};

export default Content;