export const ADD_NAME = 'ADD_NAME';
export const ADD_AGE = 'ADD_AGE';
export const POKEMON_DATA = 'POKEMON_DATA';

export function addName(payload) {
    return { type: ADD_NAME, payload };
};

export function addAge(payload) {
    return { type: ADD_AGE, payload };
};

export function getPokemon() {
    return function(dispatch) {
        return fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            dispatch({ type: POKEMON_DATA, payload: json });
        });
    }
    
};


// https://pokeapi.co/api/v2/pokemon/ditto/ 