import { configureStore } from "@reduxjs/toolkit";
import headerDataReducer from "./headerDataSlice";
import mainDataReducer from "./mainDataSlice";

export const store = configureStore({
    reducer: {
        headerData: headerDataReducer,
        mainData: mainDataReducer,
    }
})