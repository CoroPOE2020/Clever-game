/*
    MenuFooter Component
    Display the Terms of use, Contact, FAQ and Social Medias icons in the footer Menu
*/

import React, { Fragment, Component } from 'react';


class MenuFooter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <nav className="footer__menu">
                    <ul className="footer__menu__list">
                        <li className="footer__menu__list__item">Terms of use</li>
                        <li className="footer__menu__list__item">Contact</li>
                        <li className="footer__menu__list__item">F.A.Q.</li>
                        <li className="footer__menu__list__item">
                            <ul className="footer__menu__list__item__sociallist">
                                <li className="footer__menu__list__item__sociallist__item">
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </li>
                                <li className="footer__menu__list__item__sociallist__item">
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                </li>
                                <li className="footer__menu__list__item__sociallist__item">
                                    <i className="fa fa-facebook-official" aria-hidden="true"></i>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </Fragment>
        )
    }
}


export default MenuFooter;