import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import salebanner from '../../images/sale-banner.png'
import kettlebanner from '../../images/kettle-banner.png'

const useStyles = makeStyles(theme => ({
    banner: {
        marginTop: theme.spacing(2)
    },
    imgDiv: {
        width: '100%',
        margin: theme.spacing(2)
    },
    img: {
        width: '100%',
    }
}))

const Banner = () => {
    const classes = useStyles()

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        adaptiveHeight: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className={classes.banner}>
            <Slider {...settings}>
                <div>
                    <img
                        src={salebanner}
                        className={classes.img}
                        alt='sale-banner' />
                </div>
                <div>
                    <img
                        src={kettlebanner}
                        className={classes.img}
                        alt='kettle-banner' />
                </div>
            </Slider>
        </div>
    )
}

export default Banner
