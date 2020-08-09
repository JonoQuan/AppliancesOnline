import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'
import {
    Typography,
    Grid,
    Button,
} from '@material-ui/core'
import NumberFormat from 'react-number-format'

const useStyles = makeStyles(theme => ({
    success: {
        margin: theme.spacing(2)
    },
    header: {
        margin: theme.spacing(3)
    },
    body: {
        padding: theme.spacing(2)
    },
    homeButton: {
        marginTop: theme.spacing(3)
    }
}))

const Success = () => {
    const classes = useStyles()
    let { order } = useParams()
    const orderObj = JSON.parse(order)

    return (
        <div className={classes.success}>
            <Typography className={classes.header} variant='h4' align='center' >
                Thank you for you order
            </Typography>
            <Typography className={classes.body} variant='h6' align='center' >
                {orderObj.name}!
            </Typography>
            <Typography className={classes.body} variant='body1' align='center' >
                Your order has now been processed. We will get that ready for you
                and have it sent out asap.{<br />}
                Your credit card has been charged {' '}
                <NumberFormat value={orderObj.total}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                    decimalScale={2}
                    fixedDecimalScale={true} />{<br />}
                    Please check your email for complete invoice.
            </Typography>
            <Grid className={classes.homeButton}
                container item md={12}
                justify='center'>
                <Button variant='outlined'
                    disableElevation
                    href='/'
                    color='secondary'
                    align='center'>
                    Continue Shopping
            </Button>
            </Grid>
        </div>
    )
}

export default Success
