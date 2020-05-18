//import * as actionsType from '../actions/actionTest';
import { createReducer, createSlice } from '@reduxjs/toolkit';

// export const addName = createAction('ADD_NAME');
// export const addAge = createAction('ADD_AGE');
// export const getPokemon = createAction('POKEMON_DATA');

const testInitialState = {
    name: '',
    age: null,
    pokemon: null
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
        getPokemon: (state, action) => {
            fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
            .then(response => response.json())
            .then(json => {
                state.pokemon = json.name;
            })
        }
    }
});

//fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
//         .then(response => response.json())
//         .then(json => {
//             console.log(json);
//             dispatch({ type: POKEMON_DATA, payload:  });
//         });

export const { addName, addAge, getPokemon } = testSlice.actions;
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