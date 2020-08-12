import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { emptyCart } from '../../reducers/Actions'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory, useParams } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import {
    Typography,
    Grid,
    Button,
    Paper,
    CircularProgress
} from '@material-ui/core'
import NumberFormat from 'react-number-format'
import AddressConfirm from './AddressConfirm'
import ItemConfirm from './ItemConfirm'

const useStyles = makeStyles(theme => ({
    confirmation: {
        margin: theme.spacing(2)
    },
    header: {
        margin: theme.spacing(3)
    },
    cartItems: {
        margin: theme.spacing(3),
        textAlign: 'center',
        minHeight: '200px'
    },
    paperConfirm: {
        padding: theme.spacing(2)
    },
    noItems: {
        minHeight: '200px',
        margin: theme.spacing(3)
    },
    btnProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%'
    }
}))


const Confirmation = () => {
    const classes = useStyles()
    const cart = useSelector(state => state.Cart.cart)
    const cartTotal = useSelector(state => state.Cart.cartTotal)
    const history = useHistory()
    let { order } = useParams()
    const orderObj = JSON.parse(order)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

    const goBack = () => {
        const order = (JSON.stringify(orderObj))
        history.push(`/checkout/${order}`)
    }

    const processOrder = () => {
        const order = { name: orderObj.FName, total: cartTotal }
        const orderStr = JSON.stringify(order)
        setIsLoading(true)
        setTimeout(() => {
            history.push(`/success/${orderStr}`)
            setIsLoading(false)
            dispatch(emptyCart())
        }, 3000)
    }


    return (
        <div className={classes.confirmation}>
            <Typography className={classes.header} variant='h4' align='center' >
                Confirming your order
            </Typography>
            <Paper variant='outlined' className={classes.paperConfirm}>
                <Grid container
                    justify='space-evenly'
                    align='center'
                    wrap='nowrap'
                >
                    <Grid item xs={5} >
                        <AddressConfirm
                            Header={'Shipping Address'}
                            Name={orderObj.FName + " " + orderObj.Surname}
                            Address={orderObj.Address}
                            Suburb={orderObj.Suburb}
                            State={orderObj.State}
                            Postcode={orderObj.Postcode} />
                    </Grid>
                    <Grid item xs={5} >
                        <AddressConfirm
                            Header={'Billing Address'}
                            Name={orderObj.BillingName}
                            Address={orderObj.BillingAddress}
                            Suburb={orderObj.BillingSuburb}
                            State={orderObj.BillingState}
                            Postcode={orderObj.BillingPostcode} />
                    </Grid>
                </Grid>
                {cart.length >= 1
                    ? <div className={classes.cartItems} >
                        <Grid container
                            direction='row'
                            justify='space-between'
                            alignItems='center'
                            style={{ marginBottom: '8px' }} >
                            <Grid item xs={3}>
                                <Typography variant='h6' >
                                    {''}
                                </Typography>
                            </Grid>
                            {isMobile ?
                                <></>
                                :
                                <>
                                    <Grid item md={4}>
                                        <Typography variant='h6' >
                                            Price
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} md={2}>
                                        <Typography variant='h6' >
                                            Quantity
                                        </Typography>
                                    </Grid>
                                </>
                            }
                            <Grid item xs={2} md={3}>
                                <Typography variant='h6' >
                                    {''}
                                </Typography>
                            </Grid>
                        </Grid>
                        {cart.map(product => (
                            <ItemConfirm key={product.Id}
                                product={product}
                            />
                        ))}
                    </div>
                    :
                    <div className={classes.noItems}>
                        <Typography variant='h5' align='center'>
                            No items in cart
                    </Typography>
                    </div>
                }
                <Grid container
                    direction='row'
                    alignItems='center'
                    spacing={2}
                    style={{ textAlign: 'center' }}
                >
                    <Grid item xs={12} md={4}>
                        <Button variant='outlined'
                            disableElevation
                            onClick={goBack}
                            color='secondary'>
                            Edit Details
                            </Button>
                    </Grid>
                    <Grid item xs={6} md={4}>
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
                    <Grid item xs={6} md={4}>
                        <Button variant='contained'
                            disableElevation
                            color='secondary'
                            disabled={isLoading}
                            onClick={processOrder}
                            size='large'>
                            Process Order
                        </Button>
                        {isLoading && <CircularProgress size={100} className={classes.btnProgress} />}
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default Confirmation
