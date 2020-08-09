import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../reducers/Actions'
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

const useStyles = makeStyles(theme => ({
    featured: {
        marginTop: 50,
        marginBottom: 50
    },
    card: {
        width: 300,
        height: 350,
        textAlign: 'center',
        margin: theme.spacing(2)
    },
    cardMedia: {
        objectFit: 'scale-down'
    }
}))



const Featured = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    
    const products = useSelector(state => state.Data.products)
    const featuredData = products.filter(product => product.Featured === true)


    const handleAdd = (product) => {
        dispatch(addToCart(product))
    }

    return (
        <div className={classes.featured}>
            <Typography variant='h4' align='center'>
                Featured Products
        </Typography>
            <Grid container
                justify='space-evenly'>
                {featuredData.map(product => {
                    return (
                        <Grid item key={product.Id}>
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
                        </Grid>
                    )
                }
                )}
            </Grid>
        </div >
    )
}

export default Featured
