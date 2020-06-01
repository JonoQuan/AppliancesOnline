import React, { createContext, useReducer } from 'react'
import CartReducer from './CartReducer'
import dkettle from '../images/delonghikettle.jpg'
import bkettle from '../images/brevillekettle.jpg'
import stoaster from '../images/smegtoaster.jpg'
import mmicrowave from '../images/mielemicro.jpg'


export const CartContext = createContext()

const CartContextProvider = (props) => {

    const initialState = {
        count: 0,
        cart: []
    }

    const [state, dispatch] = useReducer(CartReducer, initialState)

    const dummyData = [
        {
            "Id": 1,
            "PName": "DeLonghi Kettle",
            "Brand": "DeLonghi",
            "Category": "Kettles",
            "UnitPrice": 149.00,
            "Description": "DeLonghi Kettle",
            "ProductImageUrl": dkettle,
        },
        {
            "Id": 2,
            "PName": "Breville Kettle",
            "Brand": "Breville",
            "Category": "Kettles",
            "UnitPrice": 129.00,
            "Description": "Breville The Smart Kettle",
            "ProductImageUrl": bkettle,
        },
        {
            "Id": 3,
            "PName": "Smeg Toaster",
            "Brand": "Smeg",
            "Category": "Toasters",
            "UnitPrice": 119.00,
            "Description": "Smeg 50s Styles Series",
            "ProductImageUrl": stoaster,
        },
        {
            "Id": 4,
            "PName": "Miele Microwave",
            "Brand": "Miele",
            "Category": "Microwaves",
            "UnitPrice": 1199.00,
            "Description": "Miele 26L Benchtop Microwave",
            "ProductImageUrl": mmicrowave,
        }

    ]

    const add = product => {
        dispatch({ type: 'ADD_TO_CART', product: product })
    }

    const remove = productId => {
        dispatch({ type: 'REMOVE_FROM CART', productId: productId })
    }

    return (
        <CartContext.Provider
            value={{
                cart: state.cart,
                count: state.count,
                add,
                remove,
                dummyData
            }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
