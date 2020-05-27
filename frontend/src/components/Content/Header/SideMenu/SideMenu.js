import React, { Fragment, Component } from 'react';


class SideMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <nav className="header__side-menu">
                    <ul className="header__side-menu__list">
                        <li className="header__side-menu__list__item"><i className="fa fa-user-circle" aria-hidden="true"></i></li>
                        <li className="header__side-menu__list__item"><i className="fa fa-search" aria-hidden="true"></i></li>
                    </ul>

                </nav>
            </Fragment>
        )
    }
}


export default SideMenu;