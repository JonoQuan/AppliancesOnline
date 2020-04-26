import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    CardActions
} from '@material-ui/core'
import NumberFormat from 'react-number-format'
import dkettle from '../../images/delonghikettle.jpg'

const useStyles = makeStyles(theme => ({
    card: {
        width: 300,
        height: 300,
        textAlign: 'center',
        margin: theme.spacing(2)
    },
    cardMedia: {
        objectFit: 'scale-down'
    }
}));

const ProductCard = () => {
    const data = {
        "PName": "DeLonghi Kettle",
        "Brand": "DeLonghi",
        "UnitPrice": 129.00,
        "Description": "DeLonghi Kettle",
        "ProductImageUrl": dkettle,
    }
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    component="img"
                    alt={data.PName}
                    height="140"
                    image={data.ProductImageUrl}
                    title={data.PName}
                />
                <CardContent>
                    <Typography variant='h5'>
                        {data.PName}
                    </Typography>
                    <Typography variant='body'>
                        {data.Description}
                    </Typography><br />
                    <Typography variant='subtitle1' color='error'>
                        <NumberFormat value={data.UnitPrice}
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
        </div>
    )
}

export default ProductCard
