import {configureStore, createListenerMiddleware, isAnyOf} from "@reduxjs/toolkit";
import {authSlice} from "./slice/authSlice.js";
import {loadingSlice} from "./slice/loadingSlice.js";
const {authLogin} = authSlice.actions;

const rootReducer = {
    reducer: {
        loading: loadingSlice.reducer,
        auth :authSlice.reducer
    },
};
// const listenerMiddleware = createListenerMiddleware()
// listenerMiddleware.startListening({
//     matcher: isAnyOf(authLogin),
//     effect :async  (action, listenerApi) => {
//     const role = listenerApi.getState().auth.userInfo.role;
//     if(role === "ROLE_ADMIN") {
//
//     }
//     }
// })

export const store = configureStore(rootReducer);