/*
    Content Component
*/

import React, { Fragment } from "react";

import Header from './Header/Header';
import Footer from './Footer/Footer';

const Content = props => {
    return (
        <Fragment>
            <Header />
            {/* Main pages */}
            <div className="divtest1"></div>
            <div className="divtest2"></div>
            <Footer />
        </Fragment>
    );
};

export default Content;