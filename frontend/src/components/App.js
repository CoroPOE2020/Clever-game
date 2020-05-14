import React, { Fragment } from "react";

import Test from './Test/Test';
import { ADD_NAME } from "../store/actions/actionTest";

const App = props => {
    return (
        <Fragment>
            <Test />
        </Fragment>
    );
};

export default App;