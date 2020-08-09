import React from 'react'
import { useHistory } from 'react-router-dom'
import {
    Typography,
    Link,
    ListItem,
    List,
    Grid,
    ListItemText
} from '@material-ui/core'
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


const Footer = () => {
    const classes = useStyles()
    const history = useHistory()

    const linkClick = e => {
        const name = e.currentTarget.name
        e.preventDefault()
        history.push(`/${name}`)
    }

    function ListItemLink(props) {
        return <ListItem button component="a" style={{ color: '#F2EBD5' }} onClick={linkClick} {...props} />;
    }


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
                            <ListItemLink name='about'>
                                <ListItemText primary="About Us" />
                            </ListItemLink>
                            <ListItemLink name='returns'>
                                <ListItemText primary="Returns Policy" />
                            </ListItemLink>
                            <ListItemLink href="#">
                                <ListItemText primary="My Account" />
                            </ListItemLink>
                            <ListItemLink name='contact'>
                                <ListItemText primary="Contact Us" />
                            </ListItemLink>
                        </List>
                    </Grid>
                    <Grid item>
                        <Divider orientation="vertical" variant='middle' />
                    </Grid>
                    <Grid item>
                        <List aria-label="site-links" style={{ color: '#F2EBD5' }}>
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
                                <Link href='#' style={{ color: '#F2EBD5' }}>
                                    <FontAwesomeIcon component='a' href='#' icon={faFacebookSquare} size='2x' />{' '}
                                </Link>
                                <Link href='#' style={{ color: '#F2EBD5' }}>
                                    <FontAwesomeIcon icon={faInstagram} size='2x' />{' '}
                                </Link>
                                <Link href='#' style={{ color: '#F2EBD5' }}>
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