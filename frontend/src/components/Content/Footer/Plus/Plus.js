import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import store from '../../../../store/store';
import MenuFooter from '../MenuFooter/MenuFooter';
import { enableFooter, disableFooter } from '../../../../store/slices/footerSlice';

class Plus extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayMenuFooter: false,
            isConnected: false
        };

        store.subscribe(() => {
            console.log(store.getState().footer.displayMenuFooter);
            this.setState({
                displayMenuFooter: store.getState().footer.displayMenuFooter
            });
        });

        this.handleClick = this.handleClick.bind(this);
    }

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

const mapStateToProps = state => {
    return {
        displayMenuFooter: state.displayMenuFooter
    }
};

const mapDispatchToProps = { enableFooter, disableFooter };

export default connect(mapStateToProps, mapDispatchToProps)(Plus);