import {createSlice, current} from "@reduxjs/toolkit";
import {FULFILLED, IDLE, PENDING, REJECTED} from "../../constants/apiStatus.js";
import Cookies from "universal-cookie";
import {authLogin, authRegister, getUserInfo} from "./authSlice.js";

const initialState = {
    productList: []
}
export const cartSlice = createSlice(
    {
        name: 'cart',
        initialState,
        reducers: {
            addCart: (state, action) => {
                if(action.payload){
                   const existsProduct =  state.productList.find((product)=>{
                        return product.id === action.payload.id;
                    })
                    existsProduct ? (existsProduct.amount++) : (state.productList.push({...action.payload, amount : 1}))
                }
                console.log(current(state.productList))
            },

        },


    }
)