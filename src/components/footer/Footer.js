import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import Grid from '@material-ui/core/Grid'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebookSquare, faInstagram, faYoutube
} from '@fortawesome/free-brands-svg-icons'
import Divider from '@material-ui/core/Divider'


const useStyles = makeStyles(theme => ({
    footer: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: theme.palette.primary.main,
        minHeight: '100px',
        padding: theme.spacing(2)
    },
    copyright: {
        padding: theme.spacing(2),
    }
}))

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <Grid container
                direction='column'
                alignContent='space-between'>
                <Grid container
                    direction='row'
                    justify='center'>
                    <Grid item>
                        <List aria-label="site-links">
                            <ListItemLink href="#">
                                <ListItemText primary="About Us" />
                            </ListItemLink>
                            <ListItemLink href="#">
                                <ListItemText primary="Delivery" />
                            </ListItemLink>
                            <ListItemLink href="#">
                                <ListItemText primary="Returns Policy" />
                            </ListItemLink>
                            <ListItemLink href="#">
                                <ListItemText primary="My Account" />
                            </ListItemLink>
                            <ListItemLink href="#">
                                <ListItemText primary="Contact Us" />
                            </ListItemLink>
                        </List>
                    </Grid>
                    <Grid item>
                        <Divider orientation="vertical" variant='middle' />
                    </Grid>
                    <Grid item>
                        <List aria-label="site-links">
                            <ListItem>
                                <ListItemText primary="Head Office" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Sydney, Australia" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Follow Us" />
                            </ListItem>
                            <ListItem style={{ justifyContent: 'space-between' }}>
                                <Link href='#' color='textPrimary'>
                                    <FontAwesomeIcon component='a' href='#' icon={faFacebookSquare} size='2x' />{' '}
                                </Link>
                                <Link href='#' color='textPrimary'>
                                    <FontAwesomeIcon icon={faInstagram} size='2x' />{' '}
                                </Link>
                                <Link href='#' color='textPrimary'>
                                    <FontAwesomeIcon icon={faYoutube} size='2x' />
                                </Link>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography className={classes.copyright} variant="body2" color="textSecondary">
                        {'Copyright © '}
                        <Link color="inherit" href="/">
                            Home Appliances Online
            </Link>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer