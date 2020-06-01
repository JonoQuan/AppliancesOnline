import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Typography,
} from '@material-ui/core'
import { CartContext } from '../../contexts/CartContext'
import CartItem from '../navbar/CartItem'

const useStyles = makeStyles(theme => ({
    cart: {
        // width: 250
    }
}))

const Cart = (props) => {
    const { count, cart } = useContext(CartContext)
    const classes = useStyles()



    return (
        <div className={classes.cart} >
            <Typography variant='h6' align='center' >
                Shopping Cart
            </Typography>
            <Typography variant='subtitle1' align='center' >
                You have {count} items in your cart
            </Typography>
            {cart.map(product => (
                <CartItem key={product.Id} product={product} />
            ))}
        </div>
    )
}

export default Cart
