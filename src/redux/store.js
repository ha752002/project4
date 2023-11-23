import { configureStore } from "@reduxjs/toolkit";
import {authSlice} from "./slice/authSlice.js";
import {loadingSlice} from "./slice/loadingSlice.js";

const rootReducer = {
    reducer: {
        loading: loadingSlice.reducer,
        auth :authSlice.reducer
    },
};
export const store = configureStore(rootReducer);