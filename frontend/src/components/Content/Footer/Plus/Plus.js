import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import store from '../../../../store/store';
import MenuFooter from '../MenuFooter/MenuFooter';
import { enableFooter, disableFooter } from '../../../../store/slices/footerSlice';

class Plus extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayMenuFooter: false
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
            this.props.disableFooter();
        }
        else {
            this.props.enableFooter();
        }
    }

    render() {
        return (
            <Fragment>
                <div onClick={this.handleClick}>
                    <li><i className="fa fa-ellipsis-h" aria-hidden="true"></i></li>
                    <li>Plus</li>
                </div>
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