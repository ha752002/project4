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
            },
            amountIncrement: (state, action) => {
                if(action.payload){
                    const existsProduct =  state.productList.find((product)=>{
                        return product.id === action.payload.id;
                    })
                    if(existsProduct){
                        (existsProduct.amount++)
                    }
                }
            },
            amountDecrement: (state, action) => {
                if(action.payload){
                    let existsProductIndex = -1;
                    const existsProduct =  state.productList.find((product, index)=>{
                        existsProductIndex = index;
                        return product.id === action.payload.id;
                    })
                    if(existsProduct){
                        if(existsProduct.amount === 1){
                            state.productList.splice(existsProductIndex, 1)
                        } else{
                            existsProduct.amount--
                        }
                    }
                }
            },
        },


    }
)