import React, { Fragment, Component } from 'react';


class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isConnected: false
        };
    }

    render() {
        let displayRoomsMenu = null;
        let menuClassesItems = '';

        if (this.isConnected) {
            menuClassesItems = 'menu-75';
            displayRoomsMenu = (<li className="menu__list__item"><span><i className="fa fa-home" aria-hidden="true"></i></span>Rooms</li>);
        }


        return (
            <Fragment>
                <nav className={ 'menu ' + menuClassesItems }>
                    <ul className="menu__list">
                        <li className="menu__list__item"><span><i className="fa fa-home" aria-hidden="true"></i></span>Home</li>
                        {displayRoomsMenu}
                        <li className="menu__list__item"><span><i className="fa fa-home" aria-hidden="true"></i></span>Rooms</li>
                        <li className="menu__list__item"><span><i className="fa fa-gamepad" aria-hidden="true"></i></span>Games</li>
                    </ul>      
                </nav>
            </Fragment>
        )
    }
}


export default Menu;
