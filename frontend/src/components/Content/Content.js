import React, { Fragment } from "react";

import Header from './Header/Header';
import Footer from './Footer/Footer';

const Content = props => {
    return (
        <Fragment>
            <Header />
            {/* Main pages */}
            <Footer />
        </Fragment>
    );
};

export default Content;