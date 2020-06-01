export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

const addProduct = (product, state) => {
    const updatedCart = [...state.cart]
    const updatedItemIndex = updatedCart.findIndex(
        item => item.Id === product.Id
    )

    if (updatedItemIndex < 0) {
        updatedCart.push({ ...product, quantity: 1 })
    } else {
        const updatedItem = {
            ...updatedCart[updatedItemIndex]
        }
        updatedItem.quantity++
        updatedCart[updatedItemIndex] = updatedItem
    }
    return updatedCart
}

const removeProduct = (productId, state) => {
    const updatedCart = [...state.cart]
    const updatedItemIndex = updatedCart.findIndex(
        item => item.Id === productId
    )
    const updatedItem = { ...updatedCart[updatedItemIndex] }
    updatedItem.quantity--
    if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1)
    } else {
        updatedCart[updatedItemIndex] = updatedItem
    }
    return updatedCart
}

export default (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                count: state.count + 1,
                cart: addProduct(action.product, state)
            }
        case 'REMOVE_FROM CART':
            return {
                ...state,
                count: state.count - 1,
                cart: removeProduct(action.productId, state)
            }
        default:
            return state
    }
}