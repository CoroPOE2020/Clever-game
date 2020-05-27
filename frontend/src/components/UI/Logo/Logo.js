import React, { Fragment, Component } from 'react';

import logoImg from '../../../assets/img/cleverGameLogo.png';

class Logo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const cssClasses = ["logo"];

        if (this.props.position) {
            cssClasses.push(this.props.position);
        }

        return (
            <Fragment>
                <img src={ logoImg } className={cssClasses.join(' ')} />
            </Fragment>
        )
    }
}


export default Logo;