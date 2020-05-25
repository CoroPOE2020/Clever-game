import React, { Fragment } from "react";

import Content from './Content/Content';
import Test from './Test/Test';


const App = props => {
    return (
        <Fragment>
            <Content />
            <Test />
        </Fragment>
    );
};

export default App;