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
                <div className="signup">
                    <p className="signup__text">Fill this form to join our community!</p>
                    <form className="signup__form">
                        <label for="nickname">Nickname</label>
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
                        <input type="password"/>

                        <Button>Join us !</Button>
                    </form>
                </div>
                
            </Fragment>
        )
    }
}

export default SignUp;