import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Typography,
    Grid,
    Button
} from '@material-ui/core'
import { CartContext } from '../../contexts/CartContext'

const useStyles = makeStyles(theme => ({
    btnRemove: {
        borderRadius: '20px',
        textTransform: 'none',
        height: '25px'
    }
}))

const CartItem = (props) => {
    const { product } = props
    const { remove } = useContext(CartContext)
    const classes = useStyles()


    return (
        <div>
            <Grid container
                direction='row'
                justify='space-around'
                alignItems='center'>
                <Grid item sm={3}>
                    <Typography variant='body2' >
                        {product.PName}
                    </Typography>
                </Grid>
                <Grid item sm={3} >
                    <Typography variant='body2' >
                        ${product.UnitPrice}
                    </Typography>
                </Grid>
                <Grid item sm={3} >
                    <Button
                        className={classes.btnRemove}
                        variant='contained'
                        color='primary'
                        size='small'
                        onClick={remove.bind(this, product.Id)} >
                        Remove
                        </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default CartItem
