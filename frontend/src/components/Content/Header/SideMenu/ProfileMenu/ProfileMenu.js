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
                                <span className="underline">My Profile</span>
                            </NavLink>
                        </li>
                        <li className="sidemenu_dropdown__list__item">
                            <NavLink onClick={this.props.click} className="sidemenu__dropdown__list__item__link" to={"/settings"} alt="signup">
                                <span className="underline">Settings</span>
                            </NavLink>
                        </li>
                        <li className="sidemenu_dropdown__list__item">
                            <NavLink 
                                onClick={this.props.disconnect}  
                                className="sidemenu__dropdown__list__item__link" 
                                to={"/home"} 
                                alt="signup">
                                <span className="underline">Disconnect</span>
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
                                <span className="underline">Sign In</span>
                            </NavLink>
                        </li>
                        <li className='sidemenu_dropdown__list__item'>
                            <NavLink onClick={this.props.click} className="sidemenu__dropdown__list__item__link" to={'/signup'} alt='signup'>
                                <span className="underline">Sign Up</span>
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