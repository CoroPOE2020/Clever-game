/*
    MenuFooter Component
    Display the Terms of use, Contact, FAQ and Social Medias icons in the footer Menu
*/

import React, { Fragment, Component } from 'react';
import { NavLink } from 'react-router-dom';

import { enableFooter, disableFooter } from '../../../../store/slices/footerSlice';



class MenuFooter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let classDropUp = '';
        // Test props
        if (this.props.dropup === 'yes') {
            classDropUp = 'dropup__'
        }

        return (
            <Fragment>

                <nav className={classDropUp + "footer__menu"}>
                    <ul className={classDropUp + "footer__menu__list"}>
                        
                        <li className={classDropUp + "footer__menu__list__item"}>
                            <NavLink onClick={this.props.click} className={classDropUp + "footer__menu__list__item__link"} to={'/terms'} alt='terms'>
                                <span className='underline'>Terms of use</span>
                            </NavLink>
                        </li>

                        <li className={classDropUp + "footer__menu__list__item"}>
                            <NavLink onClick={this.props.click} className={classDropUp + "footer__menu__list__item__link"} to={'/contact'} alt='contact'>
                                <span className='underline'>Contact</span>
                            </NavLink>
                        </li>

                        <li className={classDropUp + "footer__menu__list__item"}>
                            <NavLink onClick={this.props.click} className={classDropUp + "footer__menu__list__item__link"} to={'/faq'} alt='faq'>
                                <span className='underline'>F.A.Q</span>
                            </NavLink>
                        </li>

                        <li className={classDropUp + "footer__menu__list__item"}>
                            <ul className={classDropUp + "footer__menu__list__item__listsocial"}>
                                <li className={classDropUp + "footer__menu__list__item__listsocial__item"}>
                                    <NavLink onClick={this.props.click} className={classDropUp + "footer__menu__list__item__listsocial__item__link"} to={'#'} alt='twitter'>
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </NavLink>
                                </li>

                                <li className={classDropUp + "footer__menu__list__item__listsocial__item"}>
                                    <NavLink onClick={this.props.click} className={classDropUp + "footer__menu__list__item__listsocial__item__link"} to={'#'} alt='instagram'>
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </NavLink>    
                                </li>

                                <li className={classDropUp + "footer__menu__list__item__listsocial__item"}>
                                    <NavLink onClick={this.props.click} className={classDropUp + "footer__menu__list__item__listsocial__item__link"} to={'#'} alt='facebook'>
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