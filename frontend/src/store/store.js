import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { reducerTest } from './reducers/reducerTest';
import thunk from 'redux-thunk';

import { checkAgePositive } from '../middleware/redux/checkAgePositive';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    test: reducerTest
});

const store = createStore(
    reducer,
    storeEnhancers(applyMiddleware(checkAgePositive, thunk))
);

export default store;