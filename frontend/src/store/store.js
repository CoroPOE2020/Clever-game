//import { combineReducers, createStore, applyMiddleware } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
//import thunk from 'redux-thunk';

import reducerTest from './reducers/reducerTest';
import { checkAgePositive } from '../middleware/redux/checkAgePositive';

// const middleware = [
//     ...getDefaultMiddleware(),
//     checkAgePositive,
//     //thunk
// ];

// const reducer = combineReducers({
//     test: reducerTest
// });

// const store = createStore(
//     reducer,
//     applyMiddleware(...middleware)
// );

const store = configureStore({
    reducer: {
        test: reducerTest
    },
    //middleware
});

export default store;