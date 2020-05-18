import * as actions from '../../store/actions/actionTest';

export function checkAgePositive({ dispatch }) {
    return function(next) {
        return function(action) {
            if (action.type === actions.ADD_AGE) {
               if (action.payload.age <= 0) {
const store = createStore(reducer);

                   return dispatch({ type: "NEGATIVE_AGE"});
               }
            }
            
            return next(action);
        }
    }
}