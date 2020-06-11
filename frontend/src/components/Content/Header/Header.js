/*
    Header Component
    Component that brings together Logo, Menu, SideMenu Components
*/

import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import  { isMobileOnly } from 'react-device-detect';
import { NavLink } from 'react-router-dom';

import Menu from '../../UI/Menu/Menu';
import Logo from '../../UI/Logo/Logo';
import SideMenu from './SideMenu/SideMenu';
import { disableFooter } from '../../../store/slices/footerSlice';
import store from '../../../store/store';

class Header extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            displayDropUp: false,
        };

        store.subscribe(() => {
            this.setState({
                displayDropUp: store.getState().footer.displayDropUp
            });
        });

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('click');
        if (this.state.displayDropUp) {
            console.log('menu disabled')
            this.props.disableFooter();
        }
    } 
    
    render() {
        // Handle device type to properly display the Menu on Header or Footer 
        let displayMenu = isMobileOnly ? null : <Menu />
        
        return (
            <Fragment>
                <header className="header">
                    <NavLink onClick={this.handleClick} to={'/home'} alt="home" >
                        <Logo position="header__logo"/>
                    </NavLink>
                    { displayMenu }
                    <SideMenu click={this.handleClick} />
                </header>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        displayDropUp: state.displayDropUp,
    }
};

// Access dispatch functions to props
const mapDispatchToProps = {  disableFooter };

// connection to redux store
export default connect(mapStateToProps, mapDispatchToProps)(Header);