import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const mainDataSlice = createSlice({
    name: 'mainData',
    initialState,
    reducers: {
        changeColor: (state, actions) => {
            const { name, data } = actions.payload;
            state[name] = data;
        }
    }
})

export const { changeColor } = mainDataSlice.actions;
export default mainDataSlice.reducer;