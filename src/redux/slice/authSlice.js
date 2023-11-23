import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import {FULFILLED, IDLE, PENDING, REJECTED} from "../../constants/apiStatus.js";
import {apiClient} from "../../services/API.js";
import {setLocalStorage} from "../../utils/localStorage.js";

const initialState = {
    userInfo: {},
    error: null,
    status: IDLE
}

export const authLogin = createAsyncThunk("auth/login", async (body, thunkApi) => {
    try {
        const response = await apiClient.post("auth/login", body);
        const jwtToken = response.data.jwtToken;
        // console.log(response)

        if (jwtToken) {
            setLocalStorage("token", jwtToken)
            return  {
                token : response.data.jwtToken,
                role : response.data.role
            }
            
        }
    } catch (e) {
        // console.log(e);
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
        // console.log(e);
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
            builder
                .addCase(authLogin.pending, (state) => {
                    state.status = PENDING;
                })

                .addCase(authLogin.fulfilled, (state, action) => {
                    state.status = FULFILLED;
                    state.userInfo.token = action.payload;
                    console.log(current(state.userInfo));
                    state.error = null;
                })

                .addCase(authLogin.rejected, (state, action) => {
                    state.status = REJECTED;
                    state.error = action.payload;
                })
                .addCase(authRegister.pending, (state) => {
                    state.status = PENDING;
                })
                .addCase(authRegister.fulfilled, (state, action) => {
                    state.status = FULFILLED;
                    state.userInfo.token = action.payload;
                    state.error = null;
                })
                .addCase(authRegister.rejected, (state, action) => {
                    state.status = REJECTED;
                    state.error = action.payload;
                })
        }

    }
)