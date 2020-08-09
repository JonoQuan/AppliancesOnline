import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fade, makeStyles } from '@material-ui/core/styles'
import {
    AppBar,
    Toolbar,
    IconButton,
    Grid,
    InputBase,
    Badge,
    Button,
    Drawer,
} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '../../images/homeappliances-logo.png'
import MenuList from './Menu'
import SubNav from './SubNav'


const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    appbar: {
        boxShadow: 'none',
        color: '#0D0D0D',
        backgroundColor: 'white'
    },
    menuButton: {
        marginRight: theme.spacing(2),
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
    imgContainer: {
        width: '150px',
        marginLeft: theme.spacing(-2)
    },
    img: {
        width: '100%',
    },
}));

const Navbar = () => {
    const classes = useStyles()
    const [query, setQuery] = useState('')
    const count = useSelector(state => state.Cart.count)
    const history = useHistory()
    const [menuAnchor, setMenuAnchor] = useState(false)

    const toggleMenu = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setMenuAnchor(open);
    };

    const handleQueryChange = e => {
        setQuery(e.target.value)
    }

    const querySubmit = e => {
        e.preventDefault()
        history.push(`/results/${query}`)
    }

    const subCategory = e => {
        const text = e.target.textContent
        e.preventDefault()
        setQuery(text)
        if (text !== 'All Products') {
            history.push(`/results/${text}`)
        }
        else {
            history.push(`/results/`)
        }
    }

    const linkClick = e => {
        const text = e.target.textContent
        e.preventDefault()
        history.push(`/${text}`)
    }

    return (
        <div>
            <AppBar className={classes.appbar} position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleMenu('open')}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </IconButton>
                    <Drawer
                        anchor='left'
                        open={menuAnchor}
                        onClose={toggleMenu(false)}
                        onOpen={toggleMenu(true)}
                    >
                        {<MenuList toggleMenu={toggleMenu}
                            linkClick={linkClick}
                            subCategory={subCategory} />}
                    </Drawer>
                    <div className={classes.imgContainer}>
                        <Button onClick={() => { history.push(`/`) }}>
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
                            <IconButton aria-label="Items in cart"
                                color="inherit"
                                onClick={() => { history.push(`/cart`) }}>
                                <Badge badgeContent={count} color="secondary">
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                </Badge>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <SubNav subCategory={subCategory} />
        </div>
    )
}

export default Navbar
