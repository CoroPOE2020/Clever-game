//import * as actionsType from '../actions/actionTest';
import { createReducer, createSlice } from '@reduxjs/toolkit';

// export const addName = createAction('ADD_NAME');
// export const addAge = createAction('ADD_AGE');
// export const getPokemon = createAction('POKEMON_DATA');

const testInitialState = {
    name: '',
    age: null,
    pokemon: null,
    error: null
};

// export const reducerTest = createReducer(testInitialState, {
//     [addName]: (state, action) => {
//         state.name = action.payload.name
//     },
//     [addAge]: (state, action) => {
//         state.age = action.payload.age
//     },
//     [getPokemon]: (state, action) => {
//         state.pokemon = action.payload.name
//     }
// })

export const testSlice = createSlice({
    name: 'test',
    initialState: testInitialState,
    reducers: {
        addName: (state, action) => {
            state.name = action.payload.name;
        },
        addAge: (state, action) => {
            state.age = action.payload.age;
        },
        fetchPokemonDataSuccess: (state, action) => {
            state.pokemon = action.payload.name;
            state.error = null;
        },
        fetchPokemonDataFailed: (state, action) => {
            console.log('HERE');
            state.error = action.payload.message;
        }
    }
});

export const fetchPokemonData = (pokemonName) => {
    console.log(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    return function(dispatch) {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => response.json()) // data
            .then(data => {
                console.log(data);
                dispatch(fetchPokemonDataSuccess(data));
            })
            .catch(err => {
                console.log(err);
                dispatch(fetchPokemonDataFailed({ err: err, message: 'Api calls failed' }));
            });
        };
    }

// export function getPokemon() {
//     // dispatch(fetchPokemonData); // => { loading: true }
//     return function(dispatch) {
//         return fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
//         .then(response => response.json())
//         .then(json => {
//             console.log(json);
//             dispatch({ type: POKEMON_DATA, payload:  });
//         });

//     }
// };json


export const { addName, addAge, fetchPokemonDataSuccess, fetchPokemonDataFailed } = testSlice.actions;
export default testSlice.reducer;

// export const reducerTest = (state = varTestInitialState, action) => {
//     switch (action.type) {
//         case actionsType.ADD_NAME:
//             return {
//                 ...state,
//                 name: action.payload.name
//             };

//         case actionsType.ADD_AGE:
//             return {
//                 ...state,
//                 age: action.payload.age
//             };

//         case actionsType.POKEMON_DATA:
//             return {
//                 ...state,
//                 pokemon: action.payload.name
//             }

//         default: 
//             return state;
//     }
// }