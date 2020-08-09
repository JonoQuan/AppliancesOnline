import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Button, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import brevilleImg from '../../images/breville-logo.png'
import delonghiImg from '../../images/delonghi-logo.png'
import kambrookImg from '../../images/kambrook-logo.png'
import mieleImg from '../../images/miele-logo.png'
import panasonicImg from '../../images/panasonic-logo.png'
import sharpImg from '../../images/sharp-logo.png'
import sunbeamImg from '../../images/sunbeam-logo.png'


const brands = [
    {
        name: 'breville',
        img: brevilleImg
    },
    {
        name: 'delonghi',
        img: delonghiImg
    },
    {
        name: 'kambrook',
        img: kambrookImg
    },
    {
        name: 'miele',
        img: mieleImg
    },
    {
        name: 'panasonic',
        img: panasonicImg
    },
    {
        name: 'sharp',
        img: sharpImg
    },
    {
        name: 'sunbeam',
        img: sunbeamImg
    },
]

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
    const history = useHistory()

    return (
        <div className={classes.brands}>
            <Typography variant='h4' align='center' style={{ color: '#F2EBD5' }}>
                Our Trusted Brands
            </Typography>
            <Grid container
                justify='space-evenly'
                alignItems='center'>
                {brands.map(brand => {
                    return (
                        <Grid item key={brand.name} xs={1}>
                            <div className={classes.imgcontainer}>
                                <Button
                                    onClick={() => { history.push(`results/${brand.name}`) }}>
                                    <img
                                        src={brand.img}
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
