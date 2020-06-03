/*
    CheckForm middleware 
    - Will check wether each field from the form is valid or not 
*/


import { fieldError } from '../../store/slices/formValidateSlice';

export const checkForm = ({ dispatch }) => (next) => (action) => {
    if (action.type === 'formValidate/formValid') {
        /*
            TODO logic to check each field

            return dispatch(fieldError([""]));
        */
    }

    return next(action);
}