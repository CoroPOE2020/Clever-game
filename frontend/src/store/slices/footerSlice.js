import { createSlice } from '@reduxjs/toolkit';


const footerInitialState = {
    displayMenuFooter: false
};

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