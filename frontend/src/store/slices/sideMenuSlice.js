/*
    SideMenu Slice
    Defines actions for the Side Menu Component
*/

import { createSlice } from '@reduxjs/toolkit';

// SideMenu initial state
const sideMenuInitialState = {
    displayDropDown: false
};

// Handles both Actions and Reducers from Redux in slice objects

export const sideMenuSlice = createSlice({
    name: 'sideMenu',
    initialState: sideMenuInitialState,
    reducers: {
        enableDropDown: (state, action) => {
            state.displayDropDown = true;
        },
        disableDropDown: (state, action) => {
            state.displayDropDown = false;
        }
    }
});

export const { enableDropDown, disableDropDown} = sideMenuSlice.actions;
export default sideMenuSlice.reducer;