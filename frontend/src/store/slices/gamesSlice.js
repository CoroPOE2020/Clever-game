import { createSlice } from '@reduxjs/toolkit';

// Form initial state
const gamesInitialState = {
    
};

export const gamesSlice = createSlice({
    name: 'games',
    initialState: gamesInitialState,
    reducers: {}
});

export default gamesSlice.reducer;