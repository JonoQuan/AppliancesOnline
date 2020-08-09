import { ADD_PRODUCT, REMOVE_PRODUCT, ADD_QUANTITY, SUB_QUANTITY, EMPTY_CART } from "./ActionTypes"

export const addToCart = (Product) => {
    return {
        type: ADD_PRODUCT,
        Product
    }
}

export const removeFromCart = Id => {
    return {
        type: REMOVE_PRODUCT,
        Id
    }
}

export const addQuantity = Id => {
    return {
        type: ADD_QUANTITY,
        Id
    }
}

export const subQuantity = Id => {
    return {
        type: SUB_QUANTITY,
        Id
    }
}

export const emptyCart = () => {
    return {
        type: EMPTY_CART
    }
}