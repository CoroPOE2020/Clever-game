/*
    Footer Slice
    Defines actions for the Footer Component
*/

import { createSlice } from '@reduxjs/toolkit';

// Footer initial state
const footerInitialState = {
    displayMenuFooter: false
};

// Handles both Actions and Reducers from Redux in slice objects

export const footerSlice = createSlice({
    name: 'footer',
    initialState: footerInitialState,
    reducers: {
        enableFooter: (state, action) => {
            state.displayMenuFooter = true;
        },
        disableFooter: (state, action) => {
            state.displayMenuFooter = false;
        }
    }
});

export const { enableFooter, disableFooter} = footerSlice.actions;
export default footerSlice.reducer;