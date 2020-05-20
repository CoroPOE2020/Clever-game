import { addAgeNotValid } from '../../store/slices/testSlice';

export const checkAgePositive = ({ dispatch }) => (next) => (action) => {
    if (action.type === 'test/addAge') {
        if (action.payload.age <= 0) {
            //console.log('Warning, age got a negative value! THATS IMPOSSIBLE DUMBASS');
            return dispatch(addAgeNotValid({ message: 'Warning, age got a negative value!' }));
        }
    }

    return next(action);
}





// import * as actions from '../../store/actions/actionTest';

// export function checkAgePositive({ dispatch }) {
//     return function(next) {
//         return function(action) {
//             if (action.type === actions.ADD_AGE) {
//                if (action.payload.age <= 0) {
//                    console.log('Warning, age got negative value!');
//                    return dispatch({ type: "NEGATIVE_AGE"});
//                }
//             }
            
//             return next(action);
//         }
//     }
// }