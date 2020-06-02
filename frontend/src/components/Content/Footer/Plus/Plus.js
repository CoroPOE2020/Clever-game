/*
    Plus Component
    Wrapper for MenuFooter Component exclusively for mobile devices 
*/

import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import store from '../../../../store/store';
import MenuFooter from '../MenuFooter/MenuFooter';
import { enableFooter, disableFooter } from '../../../../store/slices/footerSlice';


class Plus extends Component {
    constructor(props) {
        super(props);

        // Plus class state
        this.state = {
            displayMenuFooter: false,
            isConnected: false
        };

        // Applying modifications from store to state when actions are dispatched
        store.subscribe(() => {
            this.setState({
                displayMenuFooter: store.getState().footer.displayMenuFooter
            });
        });

        this.handleClick = this.handleClick.bind(this);
    }

    // Handled the click from the Plus component click, enables or disables the menu modal that appears
    handleClick() {
        if (this.state.displayMenuFooter) {
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
        
        if (this.isConnected) {
            menuClassesItems = 'menu-plus-25';
        }
      
        return (
            <Fragment>
                <nav className={ 'menu-plus ' + menuClassesItems } onClick={this.handleClick}>
                    <ul className="menu-plus__list">
                        <li className="menu-plus__list__item"><span><i className="fa fa-ellipsis-h" aria-hidden="true"></i></span>Plus</li>
                    </ul>   
                </nav>
                { this.displayMenuFooter && <MenuFooter /> }
            </Fragment>
        )
    }
}

// Pass state into component props
const mapStateToProps = state => {
    return {
        displayMenuFooter: state.displayMenuFooter
    }
};

// Access dispatch functions to props
const mapDispatchToProps = { enableFooter, disableFooter };

// connection to redux store
export default connect(mapStateToProps, mapDispatchToProps)(Plus);