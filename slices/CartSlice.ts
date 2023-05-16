import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store/store";
import { Product, ProductInCart } from "../types/Types";
import { CartStateType } from "../types/Types";

let testProduct : ProductInCart = {
    title: 'Tempo',
    price: 1000,
    id: 1000,
    image: 'https://i.ibb.co/CJZ472c/airpods.png',
    amount: 10
}
let testProduct2 : ProductInCart = {
    title: 'Tempo',
    price: 1000,
    id: 1001,
    image: 'https://i.ibb.co/CJZ472c/airpods.png',
    amount: 10
}


const initialState : CartStateType = {
    products: [testProduct, testProduct2],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, action : PayloadAction<ProductInCart>) => {
            let newProduct : ProductInCart = {
                title: action.payload.title,
                price: action.payload.price,
                id: action.payload.id,
                image: action.payload.image,
                amount: 1
            }
            if (!checkIsContains(current(state.products), action.payload.id)) {
                state.products.push(newProduct);
            } else {
                state.products = state.products.map((element => {
                    let temp = element;
                    temp.amount = temp.id === newProduct.id ? temp.amount + 1 : temp.amount;
                    return temp;
                }))
            }
        },
        removeProduct: (state, action : PayloadAction<number>) => {
            state.products = state.products.filter(element => {
                return element.id != action.payload;
            })
        },
        addProductAmount: (state, action : PayloadAction<number>) => {
            state.products = state.products.map((element => {
                let temp = element;
                temp.amount = temp.id === action.payload ? temp.amount + 1 : temp.amount;
                return temp;
            }))
        },
        reduceProductAmount: (state, action : PayloadAction<number>) => {
            state.products = state.products.map((element => {
                let temp = element;
                temp.amount = temp.id === action.payload ? temp.amount - 1 : temp.amount;
                return temp;
            }))
        },
        clearCart: (state) => {
            state.products = [];
        },
    }
})


export const checkIsContains = (arrayOfObj : Array<ProductInCart>, id : number) => {
    let output = false;
    arrayOfObj.forEach((element) => {
        if (element?.id === id) {
            output = true;
        }
    })
    return output;
}

export const selectCartProducts = (state : RootState): Array<ProductInCart> => {
    return state.cart.products
}

export const selectCartProductsAmount = (state : RootState): number => {
    let output = state.cart.products.reduce((accumulator, element) => accumulator + element.amount, 0);
    return output;
}

export const {
    addProductToCart,
    removeProduct,
    clearCart,
    addProductAmount,
    reduceProductAmount
} = cartSlice.actions;

export default cartSlice.reducer;