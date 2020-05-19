import { createSlice } from '@reduxjs/toolkit';


const testInitialState = {
    name: '',
    age: null,
    pokemon: '',
    error: null
};

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
    // TODO dispatch(fetchPokemonDataRequest); // => { loading: true } pour le spinner
    return function (dispatch) {
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

export const { addName, addAge, fetchPokemonDataSuccess, fetchPokemonDataFailed } = testSlice.actions;
export default testSlice.reducer;