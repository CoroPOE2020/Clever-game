/*
    Profile Menu Component
    Wrapper for MenuFooter Component exclusively for mobile devices 
*/

import React, { Fragment, Component } from 'react';
import { NavLink } from 'react-router-dom';


class ProfileMenu extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        console.log(this.props);
        let dropDownContent = null;

        if (this.props.connected === "yes") {
            dropDownContent = (
                <nav className="sidemenu__dropdown">
                    <ul className="sidemenu__dropdown__list">
                        <li className="sidemenu_dropdown__list__item">
                            <NavLink onClick={this.props.click} className="sidemenu__dropdown__list__item__link" to={"/profile"} alt="signin">
                                My Profile
                            </NavLink>
                        </li>
                        <li className="sidemenu_dropdown__list__item">
                            <NavLink onClick={this.props.click} className="sidemenu__dropdown__list__item__link" to={"/settings"} alt="signup">
                                Settings
                            </NavLink>
                        </li>
                        <li className="sidemenu_dropdown__list__item">
                            <NavLink 
                                onClick={this.props.disconnect}  
                                className="sidemenu__dropdown__list__item__link" 
                                to={"/home"} 
                                alt="signup">
                                Disconnect
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            );
        }
        else {
            dropDownContent = (
                <nav className="sidemenu__dropdown">
                    <ul className="sidemenu__dropdown__list">
                        <li className="sidemenu_dropdown__list__item">
                            <NavLink onClick={this.props.click} className="sidemenu__dropdown__list__item__link" to={'/signin'} alt='signin'>
                                Sign In
                            </NavLink>
                        </li>
                        <li className='sidemenu_dropdown__list__item'>
                            <NavLink onClick={this.props.click} className="sidemenu__dropdown__list__item__link" to={'/signup'} alt='signup'>
                                Sign Up
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            );
        };

        return (
            <Fragment>
                { dropDownContent }
            </Fragment>
        )
    }
}

export default ProfileMenu;