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

const useStyles = makeStyles(theme => ({
    card: {
        width: 300,
        height: 350,
        textAlign: 'center',
        margin: theme.spacing(2)
    },
    cardMedia: {
        objectFit: 'scale-down'
    }
}));

const ProductCard = (props) => {
    const { product, handleAdd } = props
    const classes = useStyles()

    return (
        <div>
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
                    <Typography variant='body2'>
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
                    <Button variant='contained'
                        size="small"
                        color="secondary"
                        onClick={handleAdd.bind(this, product)}>
                        Add to Cart
                    </Button>
                </CardActions>
            </Card>
        </div >
    )
}

export default ProductCard
