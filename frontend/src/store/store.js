/*
    Main Store file
    Store to handle all props and states for the app
*/

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

// import testSlice from './slices/testSlice';
import footerSlice from './slices/footerSlice';
import userSlice from './slices/userSlice';
import formValidateSlice from './slices/formValidateSlice';
// import { checkAgePositive } from '../middleware/redux/checkAgePositive';

// Adding middlewares to redux
const middleware = [
    ...getDefaultMiddleware(),
    createLogger(),
    //checkAgePositive
];

// Creating store with slices
const store = configureStore({
    reducer: {
        //test: testSlice,
        footer: footerSlice, 
        user: userSlice,
        formValidate: formValidateSlice
    },
    middleware
});

export default store;