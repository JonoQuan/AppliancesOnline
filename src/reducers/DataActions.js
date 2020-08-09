import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
} from './DataActionTypes'
import dummydata from './DummyData'

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsRequest())
        // fetch('...')
        //     .then(response => {
        //         // response.json is the products
        //         const products = response.json()
        //         dispatch(fetchProductsSuccess(products))
        //     })
        //     .catch(error => {
        //         // error.message is the error message
        //         dispatch(fetchProductsFailure(error.message))
        //     })
        dispatch(fetchProductsSuccess(dummydata))
    }
}

export const fetchProductsRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST
    }
}

export const fetchProductsSuccess = users => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: users
    }
}

export const fetchProductsFailure = error => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    }
}