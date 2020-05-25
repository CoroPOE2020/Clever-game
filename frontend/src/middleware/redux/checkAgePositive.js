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