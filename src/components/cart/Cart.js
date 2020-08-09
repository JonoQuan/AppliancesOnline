import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { removeFromCart, addQuantity, subQuantity } from '../../reducers/Actions'
import { makeStyles } from '@material-ui/core/styles'
import {
    Typography,
    Grid,
    Button,
} from '@material-ui/core'
import CartItem from './CartItem'
import NumberFormat from 'react-number-format'

const useStyles = makeStyles(theme => ({
    cart: {
        margin: theme.spacing(2)
    },
    cartItems: {
        margin: theme.spacing(3),
        textAlign: 'center'
    },
    emptyCart: {
        textAlign: 'center',
        padding: theme.spacing(3)
    }
}))

const Cart = () => {
    const classes = useStyles()
    const cart = useSelector(state => state.Cart.cart)
    const count = useSelector(state => state.Cart.count)
    const cartTotal = useSelector(state => state.Cart.cartTotal)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleRemove = Id => {
        dispatch(removeFromCart(Id))
    }

    const add = Id => {
        dispatch(addQuantity(Id))
    }

    const sub = Id => {
        dispatch(subQuantity(Id))
    }

    const handleSubmit = () => {
        history.push('/checkout')
    }

    return (
        <div className={classes.cart} >
            <Typography variant='h4' align='center' >
                Shopping Cart
            </Typography>
            <Typography variant='subtitle1' align='center' >
                You have {count} items in your cart
            </Typography>
            {cart.length >= 1
                ? <div className={classes.cartItems} >
                    <Grid container
                        direction='row'
                        justify='space-between' >
                        <Grid item xs={3}>
                            <Typography variant='h6' >
                                {''}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant='h6' >
                                Quantity
                    </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant='h6' >
                                Price
                    </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant='h6' >
                                {''}
                            </Typography>
                        </Grid>
                    </Grid>
                    {cart.map(product => (
                        <CartItem key={product.Id}
                            product={product}
                            handleRemove={handleRemove}
                            add={add}
                            sub={sub} />
                    ))}
                    <Grid container
                        direction='row'
                        justify='flex-end'
                        alignItems='center'
                        style={{ marginTop: '32px' }}>
                        <Grid item xs={6}>
                            <Typography variant='h5' >
                                Total:{' '}
                                <NumberFormat value={cartTotal}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                    decimalScale={2}
                                    fixedDecimalScale={true} />
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant='contained'
                                disableElevation
                                color='secondary'
                                size='large'
                                onClick={handleSubmit}>
                                Checkout
                            </Button>
                        </Grid>
                    </Grid>
                </div>
                :
                <div className={classes.emptyCart}>
                    <Typography variant='h5' >
                        Your cart is empty
                </Typography>
                </div>
            }
        </div>
    )
}


export default Cart
