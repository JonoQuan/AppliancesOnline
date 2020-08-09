import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Typography,
    Grid
} from '@material-ui/core'
import NumberFormat from 'react-number-format'
import { useMediaQuery } from 'react-responsive'




const useStyles = makeStyles(theme => ({
    itemConfirm: {
        textAlign: 'center',
        marginBottom: theme.spacing(2)
    }
}))

const ItemConfirm = ({ product }) => {
    const classes = useStyles()

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

    return (
        <div className={classes.itemConfirm}>
            <Grid container
                justify='space-between'
                alignItems='center'
            >
                <Grid item xs={3}>
                    <Typography variant='body1' >
                        {product.PName}
                    </Typography>
                </Grid>
                {isMobile ?
                    <Grid item sm={1}>
                        <Typography variant='body1' >
                            x
                        </Typography>
                    </Grid>
                    :
                    <Grid item md={4}>
                        <Typography variant='body1' >
                            <NumberFormat value={product.UnitPrice}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                                decimalScale={2}
                                fixedDecimalScale={true} />
                        </Typography>
                    </Grid>
                }
                <Grid item xs={2}>
                    <Typography variant='body1' >
                        {product.quantity}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant='body1' >
                        <NumberFormat value={product.Total}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true} />
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default ItemConfirm
