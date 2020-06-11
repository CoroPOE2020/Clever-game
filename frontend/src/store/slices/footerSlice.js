/*
    Footer Slice
    Defines actions for the Footer Component
*/

import { createSlice } from '@reduxjs/toolkit';

// Footer initial state
const footerInitialState = {
    displayDropUp: false
};

// Handles both Actions and Reducers from Redux in slice objects

export const footerSlice = createSlice({
    name: 'footer',
    initialState: footerInitialState,
    reducers: {
        enableFooter: (state, action) => {
            state.displayDropUp = true;
        },
        disableFooter: (state, action) => {
            state.displayDropUp = false;
        }
    }
});

export const { enableFooter, disableFooter} = footerSlice.actions;
export default footerSlice.reducer;