/*
    MenuFooter Component
    Display the Terms of use, Contact, FAQ and Social Medias icons in the footer Menu
*/

import React, { Fragment, Component } from 'react';
import { NavLink } from 'react-router-dom';



class MenuFooter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>

                <nav className="footer__menu">
                    <ul className="footer__menu__list">
                        
                        <li className="footer__menu__list__item">
                            <NavLink to={'/terms'} alt='terms'>Terms of use</NavLink>
                        </li>

                        <li className="footer__menu__list__item">
                            <NavLink to={'/contact'} alt='contact'>Contact</NavLink>
                        </li>

                        <li className="footer__menu__list__item">
                            <NavLink to={'/faq'} alt='faq'>F.A.Q</NavLink>
                        </li>

                        <li className="footer__menu__list__item">
                            <ul className="footer__menu__list__item__sociallist">
                                <li className="footer__menu__list__item__sociallist__item">
                                    <NavLink to={'#'} alt='twitter'>
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </NavLink>
                                </li>

                                <li className="footer__menu__list__item__sociallist__item">
                                    <NavLink to={'#'} alt='instagram'>
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </NavLink>    
                                </li>

                                <li className="footer__menu__list__item__sociallist__item">
                                    <NavLink to={'#'} alt='facebook'>
                                        <i className="fa fa-facebook-official" aria-hidden="true"></i>
                                    </NavLink>   
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