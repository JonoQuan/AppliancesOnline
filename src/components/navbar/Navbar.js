import React, { useState } from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import {
    AppBar,
    Toolbar,
    IconButton,
    Grid,
    InputBase,
    Badge,
    MenuItem,
    Menu,
    Button,
    SwipeableDrawer,
    ListItemText,
    List,
    ListItem,
    Collapse
} from '@material-ui/core'
import { useHistory } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch, faShoppingCart, faEllipsisV, faBars, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import logo from '../../images/homeappliances-logo.png'


const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    appbar: {
        boxShadow: 'none',
        backgroundColor: 'white'
    },
    subAppbar: {
        boxShadow: 'none'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        border: 'solid 1px',
        borderRadius: 'inherit'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    imgContainer: {
        width: '150px',
        marginLeft: theme.spacing(-2)
    },
    img: {
        width: '100%',
    },
}));

const Navbar = () => {
    const classes = useStyles();
    let history = useHistory()
    const [query, setQuery] = useState('')
    const [menuAnchor, setMenuAnchor] = useState(false)
    const [shopOpen, setShopOpen] = useState(false)
    const [accountOpen, setAccountOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setMenuAnchor(open);
    };

    const toggleShopMenu = () => {
        setShopOpen(!shopOpen);
    };

    const toggleAccountMenu = () => {
        setAccountOpen(!accountOpen);
    };

    const handleQueryChange = e => {
        setQuery(e.target.value)
    }

    const querySubmit = e => {
        e.preventDefault()
        history.push(`/results/${query}`, {
            query: query
        })
    }

    const subCategory = e => {
        const text = e.target.textContent
        e.preventDefault()
        setQuery(text)
        history.replace(`/results/${text}`, {
            query: text
        })
    }

    const linkClick = e => {
        const text = e.target.textContent
        e.preventDefault()
        history.replace(`/${text}`)
    }

    const list = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer('left', false)}
            onKeyDown={toggleDrawer('left', false)}
        >
            <List>
                <ListItem button onClick={toggleShopMenu}>
                    <ListItemText primary={'Shop'} />
                    <FontAwesomeIcon icon={shopOpen ? faChevronUp : faChevronDown} />
                </ListItem>
                <Collapse in={shopOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button value="Kettles" className={classes.nested} onClick={subCategory}>
                            <ListItemText primary="Kettles" />
                        </ListItem>
                        <ListItem button value="Microwaves" className={classes.nested} onClick={subCategory}>
                            <ListItemText primary="Microwaves" />
                        </ListItem>
                        <ListItem button value="Toasters" className={classes.nested} onClick={subCategory}>
                            <ListItemText primary="Toasters" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button>
                    <ListItemText primary={'About'} onClick={linkClick} />
                </ListItem>
                <ListItem button>
                    <ListItemText primary={'Contact'} onClick={linkClick} />
                </ListItem>
                <ListItem button onClick={toggleAccountMenu}>
                    <ListItemText primary={'Account'} />
                    <FontAwesomeIcon icon={accountOpen ? faChevronUp : faChevronDown} />
                </ListItem>
                <Collapse in={accountOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Profile" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Logout" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </div>
    );

    const isMenuOpen = Boolean(anchorEl)
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = event => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </Badge>
                </IconButton>
                <p>Cart</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <FontAwesomeIcon icon={faUser} />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );


    return (
        <div>
            <AppBar className={classes.appbar} position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer('open')}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </IconButton>
                    <SwipeableDrawer
                        anchor='left'
                        open={menuAnchor}
                        onClose={toggleDrawer(false)}
                        onOpen={toggleDrawer(true)}
                    >
                        {list()}
                    </SwipeableDrawer>
                    <div className={classes.imgContainer}>
                        <Button href="/">
                            <img
                                src={logo}
                                className={classes.img}
                                alt='Logo' />
                        </Button>
                    </div>
                    <Grid container
                        justify='flex-end'
                        alignItems='center'
                        wrap='nowrap'>
                        <Grid item>
                            <form className={classes.search} onSubmit={querySubmit}>
                                <div className={classes.searchIcon}>
                                    <FontAwesomeIcon icon={faSearch} />
                                </div>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                    value={query}
                                    onChange={handleQueryChange}
                                />
                            </form>
                        </Grid>
                        <Grid item>
                            <div className={classes.sectionDesktop}>
                                <IconButton aria-label="show 17 new notifications" color="inherit">
                                    <Badge badgeContent={17} color="secondary">
                                        <FontAwesomeIcon icon={faShoppingCart} />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <FontAwesomeIcon icon={faUser} />
                                </IconButton>
                            </div>
                            <div className={classes.sectionMobile}>
                                <IconButton
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <FontAwesomeIcon icon={faEllipsisV} />
                                </IconButton>
                            </div>
                        </Grid>
                    </Grid>
                    {/* <div className={classes.grow} /> */}
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
            <AppBar className={classes.subAppbar} position="static" color='primary'>
                <Toolbar>
                    <Grid container
                        justify='space-evenly'>
                        <Grid item>
                            <Button color='default' size='large' onClick={subCategory} >Kettles</Button>
                        </Grid>
                        <Grid item>
                            <Button color='default' size='large' onClick={subCategory} >Microwaves</Button>
                        </Grid>
                        <Grid item>
                            <Button color="default" size='large' onClick={subCategory} >Toasters</Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
