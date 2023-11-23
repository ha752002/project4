import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    visible: false
};
export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        turnOn: (state) => {
            state.visible = true;
        },
        turnOff: (state) => {
            state.visible = false;
        },
    },
});