import React, { Fragment } from "react";
import  { isMobileOnly, isMobile } from 'react-device-detect';

import Menu from '../../UI/Menu/Menu';
import MenuFooter from './MenuFooter/MenuFooter';
import Plus from './Plus/Plus';


// let displayMenu = isMobileOnly ? <Menu /> : null;


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