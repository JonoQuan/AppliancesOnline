import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Typography,
    Grid
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    addressConfirm: {
        margin: theme.spacing(2)
    },
    header: {
        margin: theme.spacing(1)
    },
    address: {

    }
}))

const AddressConfirm = ({ Header, Name, Address, Suburb, State, Postcode }) => {
    const classes = useStyles()

    return (
        <div className={classes.addressConfirm}>
            <Typography className={classes.header} variant='body1' >
                {Header}
            </Typography>
            <Grid container
                direction='column'
            >
                <Grid item xs={12} md={12}>
                    <Typography className={classes.address} variant='subtitle2' >
                        {Name}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography className={classes.address} variant='subtitle2' >
                        {Address}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography className={classes.address} variant='subtitle2' >
                        {Suburb}{' '}{State}{' '}{Postcode}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default AddressConfirm
