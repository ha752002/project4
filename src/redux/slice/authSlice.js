import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IDLE, PENDING} from "../../constants/apiStatus.js";
import {apiClient} from "../../services/API.js";
import {setLocalStorage} from "../../utils/localStorage.js";

const initialState = {
    userInfo: {},
    authInfo: {},
    error: null,
    status: IDLE
}

export const authLogin = createAsyncThunk("auth/login", async (body, thunkApi) => {
    try {
        const response = await apiClient.get("/api-key", body);
        const jwtToken = response.data.jwtToken;
        if (jwtToken) {
            setLocalStorage("token", `Bearer ${jwtToken}`)
            return jwtToken;
        }
    } catch (e) {
        console.log(e);
        return thunkApi.rejectWithValue({
            code: e.response.status,
            message: e.response.data.errors
        })
    }
})

export const authRegister = createAsyncThunk("auth/register", async (body, thunkApi) => {
    try {
        return await apiClient.post('auth/register',body);
    } catch (e) {
        console.log(e);
        return thunkApi.rejectWithValue({
            code: e.response.status,
            message: e.response.data.errors
        })
    }
})

export const authSlice = createSlice(
    {
        name: 'auth',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            // --- Xử lý trong reducer với case pending / fulfilled / rejected ---
            builder
                .addCase(authLogin.pending, (state) => {
                    state.status = PENDING;
                })
                .addCase(authLogin.fulfilled, (state, action) => {
                    state.status = IDLE;
                    state.authInfo.token = action.payload;
                    state.error = null;
                })
                .addCase(authLogin.rejected, (state, action) => {
                    state.status = IDLE;
                    state.error = action.payload;
                })
                .addCase(authRegister.pending, (state) => {
                    state.status = PENDING;
                })
                .addCase(authRegister.fulfilled, (state, action) => {
                    state.status = IDLE;
                    state.authInfo.token = action.payload;
                    state.error = null;
                })
                .addCase(authRegister.rejected, (state, action) => {
                    state.status = IDLE;
                    state.error = action.payload;
                })
        }

    }
)