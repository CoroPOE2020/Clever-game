/*
    Menu Component
    Displaying of the main menu of CLever-Game app 
*/

import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import { connected, disconnected } from '../../../store/slices/userSlice';
import store from '../../../store/store';


class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isConnected: false
        };

        store.subscribe(() => {
            this.setState({
                isConnected: store.getState().user.isConnected
            });
        });
    }

    render() {
        /* 
            - display room icon inside the footer menu if connected
            - modifying css classes depending on is user connected or not
        */
        let displayRoomsMenu = null;
        let menuClassesItems = '';

        if (this.state.isConnected) {
            console.log('HERE');
            menuClassesItems = 'menu-75';
            displayRoomsMenu = (<li className="menu__list__item"><span><i className="fa fa-home" aria-hidden="true"></i></span>Rooms</li>);
        }


        return (
            <Fragment>
                <nav className={ 'menu ' + menuClassesItems }>
                    <ul className="menu__list">
                        <li className="menu__list__item"><span><i className="fa fa-home" aria-hidden="true"></i></span>Home</li>
                        { displayRoomsMenu }
                        <li className="menu__list__item"><span><i className="fa fa-gamepad" aria-hidden="true"></i></span>Games</li>
                    </ul>      
                </nav>
            </Fragment>
        )
    }
}

// Pass state into component props
const mapStateToProps = state => {
    return {
        isConnected: state.isConnected
    }
};

// Access dispatch functions to props
const mapDispatchToProps = { connected, disconnected };

// connection to redux store
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
