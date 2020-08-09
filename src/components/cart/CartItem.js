import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Typography,
    Grid,
    IconButton
} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import NumberFormat from 'react-number-format'


const useStyles = makeStyles(theme => ({
    item: {
        padding: theme.spacing(2)
    },
    btnQuantity: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        borderRadius: '20px'
    },
    btnRemove: {
        borderRadius: '20px',
        textTransform: 'none'
    },
}))

const CartItem = (props) => {
    const { product, handleRemove, add, sub } = props
    const classes = useStyles()


    return (
        <div className={classes.item}>
            <Grid container
                direction='row'
                justify='space-evenly'
                alignItems='center' >
                <Grid item xs={3}>
                    <Typography variant='body1' >
                        {product.PName}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Grid container
                        direction='row'
                        justify='space-evenly'
                        alignItems='center'>
                        <Grid item >
                            <IconButton
                                aria-label="Sub quantity"
                                color="secondary"
                                size='small'
                                onClick={sub.bind(this, product.Id)}
                                disabled={product.quantity > 1 ? false : true} >
                                <FontAwesomeIcon icon={faMinus} />
                            </IconButton>
                        </Grid>
                        <Grid item >
                            <Typography variant='body1' >
                                {product.quantity}
                            </Typography>
                        </Grid>
                        <Grid item >
                            <IconButton aria-label="Add quantity"
                                color="secondary"
                                size='small'
                                onClick={add.bind(this, product.Id)}
                                disabled={product.quantity < 10 ? false : true} >
                                <FontAwesomeIcon icon={faPlus} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3} >
                    <Typography variant='body1' >
                        <NumberFormat value={product.Total}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true} />
                    </Typography>
                </Grid>
                <Grid item xs={2} >
                    <IconButton aria-label="Remove from cart"
                        color="secondary"
                        size='small'
                        onClick={handleRemove.bind(this, product.Id)} >
                        <FontAwesomeIcon icon={faTrash} />
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    )
}

export default CartItem
