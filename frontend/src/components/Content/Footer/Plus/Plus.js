/*
    Plus Component
    Wrapper for MenuFooter Component exclusively for mobile devices 
*/

import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import store from '../../../../store/store';
import MenuFooter from '../MenuFooter/MenuFooter';
import { enableFooter, disableFooter } from '../../../../store/slices/footerSlice';
import { connected, disconnected } from '../../../../store/slices/userSlice';


class Plus extends Component {
    constructor(props) {
        super(props);

        // Plus class state
        this.state = {
            displayDropUp: false,
            isConnected: true
        };

        // Applying modifications from store to state when actions are dispatched
        store.subscribe(() => {
            this.setState({
                displayDropUp: store.getState().footer.displayDropUp
            });
        });

        this.handleClick = this.handleClick.bind(this);
    }

    // Handled the click from the Plus component click, enables or disables the menu modal that appears
    handleClick() {
        if (this.state.displayDropUp) {
            console.log('Clicked, disable Plus');
            this.props.disableFooter();
        }
        else {
            console.log('Clicked, enable Plus');
            this.props.enableFooter();
        }
    }

    render() {
        // Add specific css classes depending isConnected or not
        let menuClassesItems = '';
        let dropUp = null;
        
        if (this.state.isConnected) {
            menuClassesItems = 'menu-plus-25';
        }

        if (this.state.displayDropUp) {
            dropUp = <MenuFooter dropup='yes' click={this.handleClick}/>;
        }
      
        return (
            
            <Fragment>
                <nav className={ 'menu-plus ' + menuClassesItems } onClick={this.handleClick}>
                    <ul className="menu-plus__list">
                        <li className="menu-plus__list__item"><span><i className="fa fa-ellipsis-h" aria-hidden="true"></i></span>Plus</li>
                    </ul>   
                </nav>
                { dropUp }
            </Fragment>
        )
    }
}

// Pass state into component props
const mapStateToProps = state => {
    return {
        displayDropUp: state.displayDropUp,
        isConnected: state.isConnected
    }
};

// Access dispatch functions to props
const mapDispatchToProps = { 
    enableFooter, 
    disableFooter, 
    connected, 
    disconnected
};

// connection to redux store
export default connect(mapStateToProps, mapDispatchToProps)(Plus);