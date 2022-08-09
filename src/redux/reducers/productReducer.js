import { SELECTED_PRODUCT, SET_PRODUCTS } from "../contents/action-types";

const initialState = {
    products: []
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_PRODUCTS: return { ...state, products: payload };
        default: return state;
    }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case SELECTED_PRODUCT: return { ...state, products: payload };
        default: return state;
    }
}