/*
    Side Menu Component 
    Emoticones in the Header 
*/

import React, { Fragment, Component } from 'react';
import { NavLink } from 'react-router-dom';

class SideMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <nav className="header__side-menu">
                    <ul className="header__side-menu__list">
                        <li className="header__side-menu__list__item"><i className="fa fa-search" aria-hidden="true"></i></li>
                        <li className="header__side-menu__list__item" >
                            <NavLink onClick={this.props.click} to={"/signin"} alt="signin">
                                <i className="fa fa-user-circle" aria-hidden="true"></i>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </Fragment>
        )
    }
}


export default SideMenu;