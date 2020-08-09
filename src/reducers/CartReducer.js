import { ADD_PRODUCT, REMOVE_PRODUCT, ADD_QUANTITY, SUB_QUANTITY, EMPTY_CART } from "./ActionTypes"

const initialState = {
    count: 0,
    cart: [],
    cartTotal: 0.00
}

const add = (a, b) => a + b
const multiply = (a, b) => a * b

const totalAmount = cart => {
    let totalArray = []
    cart.map(product => totalArray.push(product.Total))
    const sum = totalArray.reduce(add)

    return sum
}

const totalCount = cart => {
    let totalArray = []
    let sum = 0
    if (cart.length >= 1) {
        cart.map(product => totalArray.push(product.quantity))
        sum = totalArray.reduce(add)
        return sum
    }
    else {
        return sum
    }
}

const CartReducer = (state = initialState, action) => {

    let cartCopy = state.cart.slice()
    let selectedProduct = state.cart.find(product => product.Id === action.Id)

    switch (action.type) {
        case ADD_PRODUCT:
            let newProduct = { ...action.Product, quantity: 1, Total: action.Product.UnitPrice }
            let existingProduct = state.cart.find(product => product.Id === newProduct.Id)

            if (existingProduct) {
                existingProduct = { ...existingProduct, quantity: existingProduct.quantity + 1 }
                let total = multiply(existingProduct.quantity, existingProduct.UnitPrice)
                cartCopy = cartCopy.filter(product => product.Id !== newProduct.Id)
                cartCopy.push({ ...existingProduct, Total: total })
            }
            else {
                cartCopy.push({ ...newProduct })
            }

            return {
                ...state,
                count: totalCount(cartCopy),
                cart: [...cartCopy],
                cartTotal: totalAmount(cartCopy)
            }
        case REMOVE_PRODUCT:

            if (state.cart.length > 1) {
                cartCopy = cartCopy.filter(product => product.Id !== action.Id)
            }
            else {
                cartCopy = []
            }

            return {
                ...state,
                count: totalCount(cartCopy),
                cart: [...cartCopy],
                cartTotal: state.cart.length > 1 ? totalAmount(cartCopy) : 0
            }
        case ADD_QUANTITY:
            let total = (selectedProduct.quantity + 1) * selectedProduct.UnitPrice
            selectedProduct = { ...selectedProduct, quantity: selectedProduct.quantity + 1, Total: total }
            cartCopy = state.cart.map(product =>
                product.Id === action.Id
                    ? { ...selectedProduct }
                    : product)

            return {
                ...state,
                count: state.count + 1,
                cart: [...cartCopy],
                cartTotal: totalAmount(cartCopy)
            }
        case SUB_QUANTITY:

            if (selectedProduct.quantity > 1) {
                cartCopy = state.cart.map(product =>
                    product.Id === action.Id
                        ? { ...product, quantity: product.quantity - 1, Total: (product.quantity - 1) * product.UnitPrice }
                        : product,
                )
            }
            else {
                cartCopy = cartCopy.filter(product => product.Id !== action.Id)
            }

            return {
                ...state,
                count: state.count - 1,
                cart: [...cartCopy],
                cartTotal: totalAmount(cartCopy)
            }
        case EMPTY_CART:
            return {
                ...state,
                count: state.count = 0,
                cart: [],
                cartTotal: 0.00
            }
        default:
            return state
    }
}

export default CartReducer