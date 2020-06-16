/*
    Carousel Component
    Display Carousel of video games
*/

import React, { Fragment, Component } from 'react';

class Carousel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // Add specific css classes depending on Carousel position props
        const cssClasses = ["carousel"];

        if (this.props.position) {
            cssClasses.push(this.props.position);
        }

        return (
            <Fragment>
               <p className={cssClasses.join(' ')}>
                   Carousel
               </p>
            </Fragment>
        )
    }
}

export default Carousel;