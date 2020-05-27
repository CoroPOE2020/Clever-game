import React, { Fragment, Component } from 'react';

import logoImg from '../../../assets/img/cleverGameLogo.png';

class Logo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <img src={ logoImg } ></img>
            </Fragment>
        )
    }
}


export default Logo;