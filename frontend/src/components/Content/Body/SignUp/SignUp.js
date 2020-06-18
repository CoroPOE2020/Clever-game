/*
    Sign Up Component
    Sign Up for new user
*/

import React, { Fragment, Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(event){
        event.preventDefault();
        
      }

    render () {
        return (
            <form>
                <div>
                    <label>Nickname</label>
                    <input/>
                </div>
                <div>
                    <label>Email</label>
                    <input/>
                </div>
                <div>
                    <label>Birthday</label>
                    <input/>
                </div>
                <div>
                    <label>Password</label>
                    <input/>
                </div>
            </form>
        )
    }
}
//         <form onSubmit={handleSubmit}>
//           <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           </div>
//           <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           </div>
//         </form>
// }

export default SignUp;