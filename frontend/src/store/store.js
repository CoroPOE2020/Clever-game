import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import testSlice from './slices/testSlice';
import { checkAgePositive } from '../middleware/redux/checkAgePositive';

import { createLogger } from 'redux-logger';

const logger = createLogger({});

const middleware = [
    ...getDefaultMiddleware(),
    logger
    //checkAgePositive
];

const store = configureStore({
    reducer: {
        test: testSlice
    },
    middleware
});

export default store;