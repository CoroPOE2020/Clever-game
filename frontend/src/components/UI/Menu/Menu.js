/*
    Menu Component
    Displaying of the main menu of CLever-Game app 
*/

import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


import { connected, disconnected } from '../../../store/slices/userSlice';
import { disableFooter } from '../../../store/slices/footerSlice';
import store from '../../../store/store';


class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isConnected: false,
            displayDropUp: false, // REVIEW error ?
        };

        store.subscribe(() => {
            this.setState({
                isConnected: store.getState().user.isConnected,
                displayDropUp: store.getState().footer.displayDropUp
            });
        });

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.state.displayDropUp) {
            console.log('Clicked, disable Plus from menu');
            this.props.disableFooter();
        }
    }


    render() {
        /* 
            - display room icon inside the footer menu if connected
            - modifying css classes depending on is user connected or not
        */
        let displayRoomsMenu = null;
        let menuClassesItems = '';

        if (this.state.isConnected) {
            menuClassesItems = 'menu-75';
            displayRoomsMenu = (
             <li className="menu__list__item">
                 <NavLink onClick={this.handleClick} to={'/rooms'} alt='rooms'>
                    <span>
                        <i className="fa fa-home" aria-hidden="true"></i>
                    </span>Rooms
                 </NavLink>
            </li>
            );
        }


        return (
            <Fragment>
                <nav className={ 'menu ' + menuClassesItems }>
                    <ul className="menu__list">
                        <li className="menu__list__item">
                            <NavLink onClick={this.handleClick} to={'/home'} alt='home'>
                                <span><i className="fa fa-home" aria-hidden="true"></i></span>
                                Home
                            </NavLink>
                        </li>
                        { displayRoomsMenu }
                        <li className="menu__list__item">
                            <NavLink onClick={this.handleClick} to={'/games'} alt='games'>
                                <span><i className="fa fa-gamepad" aria-hidden="true"></i></span>
                                Games    
                            </NavLink>
                        </li>
                    </ul>      
                </nav>
            </Fragment>
        )
    }
}

// Pass state into component props
const mapStateToProps = state => {
    return {
        isConnected: state.isConnected,
        displayDropUp: state.displayDropUp
    }
};

// Access dispatch functions to props
const mapDispatchToProps = { connected, disconnected, disableFooter };

// connection to redux store
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
