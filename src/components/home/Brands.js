import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Button, Typography } from '@material-ui/core'
import breville from '../../images/breville-logo.png'
import delonghi from '../../images/delonghi-logo.png'
import kambrook from '../../images/kambrook-logo.png'
import miele from '../../images/miele-logo.png'
import panasonic from '../../images/panasonic-logo.png'
import sharp from '../../images/sharp-logo.png'
import sunbeam from '../../images/sunbeam-logo.png'


const brands = [breville, delonghi, kambrook, miele, panasonic, sharp, sunbeam]

const useStyles = makeStyles(theme => ({
    brands: {
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(2),
        marginTop: 50,
        marginBottom: 50
    },
    imgContainer: {
        width: '200px',
    },
    img: {
        width: '100%',
    },
}))

const Brands = () => {
    const classes = useStyles()
    return (
        <div className={classes.brands}>
            <Typography variant='h4' align='center'>
                Our Trusted Brands
            </Typography>
            <Grid container
                justify='space-evenly'
                alignItems='center'>
                {brands.map(brand => {
                    return (
                        <Grid item xs={1}>
                            <div className={classes.imgcontainer}>
                                <Button href="/">
                                    <img
                                        src={brand}
                                        className={classes.img}
                                        alt='logo' />
                                </Button>
                            </div>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default Brands
