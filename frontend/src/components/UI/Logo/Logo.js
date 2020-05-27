import React, { Fragment, Component } from 'react';

import logoImg from '../../../assets/img/cleverGameLogo.png';

class Logo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const cssClasses = [
            "logo", 
            this.props.position ? this.props.position : "default"
        ];

        return (
            <Fragment>
                <img src={ logoImg } className={cssClasses.join(' ')} />
            </Fragment>
        )
    }
}


export default Logo;