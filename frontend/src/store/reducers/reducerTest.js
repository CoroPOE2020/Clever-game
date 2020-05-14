import * as setters from '../actions/actionTest';

const varTestInitialState = {
    name: '',
    age: null
};

export const reducerTest = (state = varTestInitialState, actions) => {
    switch (actions.type) {
        case setters.ADD_NAME:
            return {
                ...state,
                name: actions.payload.name
            };

        case setters.ADD_AGE:
            return {
                ...state,
                age: actions.payload.age
            };

        default: 
            return state;
    }
}