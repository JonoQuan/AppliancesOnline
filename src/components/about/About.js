import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'
import retailsection from '../../images/retail-section-appliances.png'

const useStyles = makeStyles(theme => ({
    aboutDiv: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4)
    },
    header: {
        margin: theme.spacing(2)
    },
    body: {
        margin: theme.spacing(2)
    },
    imgContainer: {
        width: '100%',
        marginLeft: '5px',
        marginRight: '5px'
    },
    img: {
        width: '100%',
    },
}));


const About = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.aboutDiv} >
                <Grid container
                    alignItems='center'
                    justify='space-evenly' >
                    <Grid item xs={12} sm={4}>
                        <Typography variant='h4' className={classes.header}>
                            About Us
                        </Typography>
                        <Typography variant='body1' className={classes.body}>
                            Home Appliances Online is an all-Australian family-run business.
                            Based in Melbourne, the business started off as a small retailer but now ships nationwide.
                            We pride ourselves on giving the best customer experience out there.
                            Our friendly staff will assist you by answering your queries and, helping you complete your order if needed.
                            With a wide range of home appliances we are sure to tailor to your needs.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div className={classes.imgContainer}>
                            <img
                                src={retailsection}
                                className={classes.img}
                                alt='woman-headset' />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default About
