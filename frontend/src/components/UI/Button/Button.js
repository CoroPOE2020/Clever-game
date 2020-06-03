/*
    Button Component
    Dynamic (classes, types) Button component for the entire app
*/

import React, { Fragment, Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // Add specific css classes depending on button type props
        const cssClasses = ["button"];

        if (this.props.btnClass) {
            cssClasses.push('button__' + this.props.btnClass);
        }
        
        /*
            - className: Dynamicly adds css classes
            - type: Defines the button type (submit or not)
            - onClick: Triggers function on click event
            - disabled: Enables or disables the button
            - children: Gets the button name
        */
        return (
            <button 
                className={cssClasses.join(' ')} 
                type={this.props.submit === "yes" ? "submit" : "button"} 
                onClick={this.props.clicked} 
                disabled={this.props.disabled === "yes" ? true : false}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;