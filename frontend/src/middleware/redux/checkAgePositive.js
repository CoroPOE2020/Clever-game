import * as actions from '../../store/actions/actionTest';

export function checkAgePositive({ dispatch }) {
    return function(next) {
        return function(action) {
            if (action.type === actions.ADD_AGE) {
               if (action.payload.age <= 0) {
                   console.log('Warning, age got negative value!');
                   return dispatch({ type: "NEGATIVE_AGE"});
               }
            }
            
            return next(action);
        }
    }
}