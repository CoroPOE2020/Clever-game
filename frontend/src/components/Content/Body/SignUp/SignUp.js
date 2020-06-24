/*
    Sign Up Component
    Sign Up for new user
*/

import React, { Fragment, Component } from 'react';

import store from '../../../../store/store';
 
import Button from '../../../UI/Button/Button';

class SignUp extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     newUser: {
        //         nickname: '',
        //         email: '',
        //         birthday: '',
        //         password: ''
        //     }
        // }

        // store.subscribe(() => {
        //     this.setState({
        //         newUser: {
        //             nickname: store.getState().user.,
        //             email: '',
        //             birthday: '',
        //             password: ''
        //         }
        //     });
        // });

        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        
      }

    render () {
        return (
            <Fragment>
                <form className="signup__form">
                    <p className="signup__form__text">Join Us!</p>
                    {/* <label for="nickname">Nickname</label>
                    <input type="text"/>

                    <label for="email">Email</label>
                    <input type="text"/>

                    <label for="birthdate">Date of Birth</label>
                    <div className="signup__form__birthdate">
                        <input className="signup__form__birthdate__day" type="number" placeholder="DD"/>
                        <input className="signup__form__birthdate__month" type="number" placeholder="MM"/>
                        <input className="signup__form__birthdate__year"type="number" placeholder="YYYY"/>
                    </div>  
                    
                
                    <label for="password">Password</label>
                    <input type="password"/> */}
                    {/* <div className="signup__form__group">
                        <label for="nickname" className="signup__form__group__label">Nickname</label>
                        <input type="text" className="signup__form__group__input" placeholder="Nickname" name="nickname" required/>
                    </div>
                    
                    <div className="signup__form__group">
                        <label for="email" className="signup__form__group__label">Email</label>
                        <input type="text" className="signup__form__group__input"/>
                    </div>
                    <div className="signup__form__group">
                        <label for="birthdate" className="signup__form__group__label">Date of Birth</label>
                        <input className="signup__form__group__input" type="number" placeholder="DD"/>
                        <input className="signup__form__group__input" type="number" placeholder="MM"/>
                        <input className="signup__form__group__input" type="number" placeholder="YYYY"/> 
                    </div>
                    
                    <div className="signup__form__group">
                        <label for="password" className="signup__form__group__label">Password</label>
                        <input type="password" className="signup__form__group__input"/>
                    </div> */}

                    <div className="signup__form__element">
                        <label className="signup__form__label" for="regUsername">username</label>
                        <input className="signup__form__input" type="text" name="Username" id="regUsername"/>
                        <i className="signup__form__icon fa fa-user" aria-hidden="true"></i>
                        <i className="signup__form__icon--error fa fa-exclamation" aria-hidden="true"></i>
                        <span className="signup__form__message"></span>
                    </div>

                    <div className="signup__form__element">
                        <label className="signup__form__label" for="email">email</label>
                        <input className="signup__form__input" type="email" name="Email" id="email"/>
                        <i className="signup__form__icon fa fa-envelope" aria-hidden="true"></i>
                        <i className="signup__form__icon--error fa fa-exclamation" aria-hidden="true"></i>
                        <span className="signup__form__message"></span>
                    </div>

                    <div className="signup__form__element">
                        <label className="signup__form__label" for="regPassword">password</label>
                        <input className="signup__form__input" type="password" name="Password" id="regPassword"/>
                        <i className="signup__form__icon fa fa-lock" aria-hidden="true"></i>
                        <i className="signup__form__eye fa fa-eye" aria-hidden="true"></i>
                        <i className="signup__form__icon--error fa fa-exclamation" aria-hidden="true"></i>
                        <span className="signup__form__message"></span>
                    </div>

                    <div className="signup__form__element">
                        <label className="signup__form__label" for="confirmPassword">confirm</label>
                        <input className="signup__form__input" type="password" name="Confirm password" id="confirmPassword"/>
                        <i className="signup__form__icon fa fa-lock" aria-hidden="true"></i>
                        <i className="signup__form__eye fa fa-eye" aria-hidden="true"></i>
                        <i className="signup__form__icon--error fa fa-exclamation" aria-hidden="true"></i>
                        <span className="signup__form__message"></span>
                    </div>

                    <div className="signup__form__submit">
                        <span className="signup__form__submit__text">register</span>
                        <Button btnClass="signup__form__submit__button" submit="yes">
                            <i className="signup__form__submit__icon fa fa-arrow-right" aria-hidden="true"></i>
                        </Button>
                    </div>

                    <div className="signup__form__existacc">
                        <p className="signup__form__existacc__text">use existing account</p>
                        <p className="signup__form__existacc__link">login</p>
                    </div>
                </form>
            </Fragment>
        )
    }
}

export default SignUp;