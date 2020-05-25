import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import testSlice from './slices/testSlice';
import { checkAgePositive } from '../middleware/redux/checkAgePositive';



const middleware = [
    ...getDefaultMiddleware(),
    createLogger(),
    checkAgePositive
];

const store = configureStore({
    reducer: {
        test: testSlice
    },
    middleware
});

export default store;