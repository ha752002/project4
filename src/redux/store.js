import {configureStore, createListenerMiddleware, isAnyOf} from "@reduxjs/toolkit";
import {authLogin, authSlice, getUserInfo} from "./slice/authSlice.js";
import {loadingSlice} from "./slice/loadingSlice.js";
import {cartSlice} from "./slice/cartSlice.js";

const rootReducer = {
    loading: loadingSlice.reducer,
    auth: authSlice.reducer,
    cart: cartSlice.reducer
};
const loginListenerMiddleware = createListenerMiddleware()
loginListenerMiddleware.startListening({
    matcher: isAnyOf(authLogin),
    effect: async (action, listenerApi) => {
        // console.log(1)
        await listenerApi.dispatch(getUserInfo())
    }
})

export const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().prepend(loginListenerMiddleware.middleware)
});