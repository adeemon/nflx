import { createSlice} from "@reduxjs/toolkit";

import { RootState } from "../store/store";
import { Category, Product } from "../types/Types";
import { testData } from '../testData/productsBase'


let getTestData = (): Map<Category, Array<Product>> => {
    let output = new Map();
    output.set(Category.wireHeadphones, []);
    output.set(Category.wirelessHeadPhones, []);
    testData.forEach(element => {
        switch (element.category) {
            case Category.wireHeadphones:
            {   
                let temp = output.get(Category.wireHeadphones);
                temp.push(element);
                output.set(Category.wireHeadphones, temp);
                break;
            }
            case Category.wirelessHeadPhones:
            {
                let temp = output.get(Category.wirelessHeadPhones);
                temp.push(element);
                output.set(Category.wirelessHeadPhones, temp);
            }
            default:
                break;
        }
    });
    return output;
}



type ProductsStateType = {
    products: Map<Category, Array<Product>>,
    isFilled: boolean
}
type CategoryProducts = Category & Array<Product>;

let initialStateArray: Map<Category, Array<Product>> = getTestData();

const initialState : ProductsStateType = {
    products: initialStateArray,
    isFilled: false,
}

export const productsContainerSlice = createSlice({
    name: 'productsContainer',
    initialState,
    reducers: {
    }
})

export const selectAllProducts = (state : RootState) => {
    return state.productsContainer.products;
}

export const selectIsFiled = (state : RootState) => {
    return state.productsContainer.isFilled;
}

export const {
} = productsContainerSlice.actions;
export default productsContainerSlice.reducer;