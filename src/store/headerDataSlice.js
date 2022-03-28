import { createSlice } from "@reduxjs/toolkit";

const initialState = { san: 0 }

export const headerDataSlice = createSlice({
    name: 'headerData',
    initialState,
    reducers: {
        kosh: (state) => {
            state.san += 1;
        },
        kemit: (state) => {
            state.san -= 1;
        },
        bashynan: (state) => {
            state.san = 0;
        },
        kaalagandai: (state, action) => {
            state.san = action.payload;
        }
    }
});

export const { kosh, kemit, bashynan, kaalagandai } = headerDataSlice.actions;
export default headerDataSlice.reducer;






