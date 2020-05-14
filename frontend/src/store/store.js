import { combineReducers, createStore } from 'redux';
import { reducerTest } from './reducers/reducerTest';

const reducer = combineReducers({
    test: reducerTest
});

const store = createStore(reducer);

export default store;