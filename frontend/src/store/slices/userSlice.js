/*
    userSlice Slice
    Defines actions for the user
*/

import { createSlice } from '@reduxjs/toolkit';

// User initial state
const userInitialState = {
    isConnected: false
};

// Handles both Actions and Reducers from Redux in slice objects

export const userSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {
        connected: (state, action) => {
            state.isConnected = true;
        },
        disconnected: (state, action) => {
            state.isConnected = false;
        }
    }
});

export const { connected, disconnected } = userSlice.actions;
export default userSlice.reducer;