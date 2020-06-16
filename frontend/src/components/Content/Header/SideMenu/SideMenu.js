/*
    Side Menu Component 
    Emoticones in the Header 
*/

import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import store from '../../../../store/store';

import { enableDropDown, disableDropDown } from '../../../../store/slices/sideMenuSlice';

import ProfileMenu from './ProfileMenu/ProfileMenu';

class SideMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayDropDown: false,
        };

        // Applying modifications from store to state when actions are dispatched
        store.subscribe(() => {
            this.setState({
                displayDropDown: store.getState().sideMenu.displayDropDown
            });
        });

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.state.displayDropDown) {
            this.props.disableDropDown();
        }
        else {
            this.props.enableDropDown();
        }
    }

    render() {
        let dropDown = null;

        if (this.state.displayDropDown) {
            dropDown = <ProfileMenu dropDown='yes' click={this.handleClick}/>;
        }

        return (
            <Fragment>
                <nav className="header__side-menu">
                    <ul className="header__side-menu__list">
                        <li className="header__side-menu__list__item"><i className="fa fa-search" aria-hidden="true"></i></li>
                        <li className="header__side-menu__list__item" >
                            <i className="fa fa-user-circle" aria-hidden="true" onClick={this.handleClick}></i>
                        </li>
                    </ul>
                </nav>
                { dropDown }
            </Fragment>
        )
    }
}


const mapStateToProps = state => {
    return {
        displayDropDown: state.displayDropDown
    }
};

// Access dispatch functions to props
const mapDispatchToProps = { 
    enableDropDown,
    disableDropDown
};

// connection to redux store
export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);