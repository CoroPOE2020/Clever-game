import React, { Fragment, Component } from 'react';

import Logo from '../../../UI/Logo/Logo';
class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Logo />
                <p>Menu! </p>
            </Fragment>
        )
    }
}


export default Menu;