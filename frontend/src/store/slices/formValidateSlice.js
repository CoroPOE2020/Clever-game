/*
    FormValidateSlice Slice
    Defines actions to validate a form
*/

import { createSlice } from '@reduxjs/toolkit';

// Form initial state
const formInitialState = {
    isFormValid: false,
    errorFormField: [] // field not valid or empty
};

// Handles both Actions and Reducers from Redux in slice objects

export const formValidateSlice = createSlice({
    name: 'formValidate',
    initialState: formInitialState,
    reducers: {
        formValid: (state, action) => {
            state.isFormValid = true;
        },
        // formNotValid: (state, action) => {
        //     state.isFormValid = false;
        // },
        // TODO
        // fieldError: (state, action) => {
        //      state.isFormValid = false;
        //     state.errorFormField
        // }
    }
});


export const { formValid, formNotValid } = formValidateSlice.actions;
export default formValidateSlice.reducer;