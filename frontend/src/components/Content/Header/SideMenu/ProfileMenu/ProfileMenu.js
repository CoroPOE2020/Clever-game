/*
    Plus Component
    Wrapper for MenuFooter Component exclusively for mobile devices 
*/

import React, { Fragment, Component } from 'react';
//import { connect } from 'react-redux';

//import store from '../../../../store/store';




class ProfileMenu extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Fragment>
            </Fragment>
        )
    }
}

// // Pass state into component props
// const mapStateToProps = state => {
//     return {
//         displayDropUp: state.displayDropUp,
//         isConnected: state.isConnected
//     }
// };

// // Access dispatch functions to props
// const mapDispatchToProps = { 
//     enableFooter, 
//     disableFooter, 
//     connected, 
//     disconnected
// };

// connection to redux store
//export default connect(mapStateToProps, mapDispatchToProps)(Plus);
export default ProfileMenu;