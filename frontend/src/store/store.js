import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import testSlice from './slices/testSlice';
import { checkAgePositive } from '../middleware/redux/checkAgePositive';


// const middleware = [
//     ...getDefaultMiddleware(),
//     checkAgePositive
// ];

const store = configureStore({
    reducer: {
        test: testSlice
    },
    //middleware
});

export default store;