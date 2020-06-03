/*
    Footer Component
    Component that brings together MenuFooter, Menu and Plus Components
*/

import React, { Fragment } from "react";
import  { isMobileOnly, isMobile } from 'react-device-detect';

import Menu from '../../UI/Menu/Menu';
import MenuFooter from './MenuFooter/MenuFooter';
import Plus from './Plus/Plus';


//  Handle device type to properly display the Menu, Plus and MenuFooter Components in the Footer 
let displayMenu = null;
let displayPlusOption = null;

if (isMobileOnly) {
    displayMenu = <Menu/>;
    displayPlusOption = <Plus />
}
else {
    displayMenu = <MenuFooter/>
}
 

const Footer = props => {
    return (
        <Fragment>
            <footer className="footer">
                { displayMenu }
                { displayPlusOption }
            </footer>
        </Fragment>
    );
};

export default Footer;