import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Grid,
} from '@material-ui/core'
import NumberFormat from 'react-number-format'
import brevillekettle from '../../images/brevillekettle.jpg'
import smegtoaster from '../../images/smegtoaster.jpg'
import panasonicmicro from '../../images/panasonicmicro.jpg'

const data = [
    {
        "PName": "Breville Kettle",
        "Brand": "Breville",
        "UnitPrice": 129.00,
        "Description": "Breville The Smart Kettle",
        "ProductImageUrl": brevillekettle,
    },
    {
        "PName": "Smeg Toaster",
        "Brand": "Smeg",
        "UnitPrice": 119.00,
        "Description": "Smeg 50s Styles Series 2 Slice Toaster",
        "ProductImageUrl": smegtoaster,
    },
    {
        "PName": "Panasonic Microwave",
        "Brand": "Panasonic",
        "UnitPrice": 248.99,
        "Description": "Panasonic Flatbed Microwave Oven",
        "ProductImageUrl": panasonicmicro,
    }
]

const useStyles = makeStyles(theme => ({
    featured: {
        marginTop: 50,
        marginBottom: 50
    },
    card: {
        width: 300,
        height: 300,
        textAlign: 'center',
        margin: theme.spacing(2)
    },
    cardMedia: {
        objectFit: 'scale-down'
    }
}))

const Featured = () => {
    const classes = useStyles()
    return (
        <div className={classes.featured}>
            <Typography variant='h4' align='center'>
                Featured Products
        </Typography>
            <Grid container
                justify='space-evenly'>
                {data.map(product => {
                    return (
                        <Grid item key={product.PName}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    component="img"
                                    alt={product.PName}
                                    height="140"
                                    image={product.ProductImageUrl}
                                    title={product.PName}
                                />
                                <CardContent>
                                    <Typography variant='h5'>
                                        {product.PName}
                                    </Typography>
                                    <Typography variant='body'>
                                        {product.Description}
                                    </Typography><br />
                                    <Typography variant='subtitle1' color='error'>
                                        <NumberFormat value={product.UnitPrice}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            prefix={'$'}
                                            decimalScale={2}
                                            fixedDecimalScale={true} />
                                    </Typography>
                                </CardContent>
                                <CardActions style={{ display: 'inherit' }}>
                                    <Button variant='contained' size="small" color="secondary">
                                        Add to Cart
                                </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default Featured
