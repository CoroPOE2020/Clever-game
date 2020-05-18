import * as actionsType from '../actions/actionTest';

const varTestInitialState = {
    name: '',
    age: null,
    pokemon: null
};

export const reducerTest = (state = varTestInitialState, action) => {
    switch (action.type) {
        case actionsType.ADD_NAME:
            return {
                ...state,
                name: action.payload.name
            };

        case actionsType.ADD_AGE:
            return {
                ...state,
                age: action.payload.age
            };

        case actionsType.POKEMON_DATA:
            return {
                ...state,
                pokemon: action.payload.name
            }

        default: 
            return state;
    }
}