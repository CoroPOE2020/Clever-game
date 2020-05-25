import React, { Fragment, Component } from 'react';


class Logo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <p>Logo!</p>
                <i class="fa fa-user" aria-hidden="true"></i>
            </Fragment>
        )
    }
}


export default Logo;