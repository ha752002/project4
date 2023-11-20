import { configureStore } from "@reduxjs/toolkit";
import {authSlice} from "./slice/authSlice.js";

const rootReducer = {
    reducer: {
        auth :authSlice.reducer
    },
};
export const store = configureStore(rootReducer);