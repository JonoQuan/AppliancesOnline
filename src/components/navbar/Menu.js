import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    ListItemText,
    List,
    ListItem,
    Collapse,
} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'


const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}))


const Menu = (props) => {
    const { toggleMenu, linkClick, subCategory } = props
    const classes = useStyles()
    const [shopOpen, setShopOpen] = useState(false)
    const [accountOpen, setAccountOpen] = useState(false)

    const toggleShopMenu = () => {
        setShopOpen(!shopOpen);
    };

    const toggleAccountMenu = () => {
        setAccountOpen(!accountOpen);
    };

    return (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleMenu('left', false)}
            onKeyDown={toggleMenu('left', false)}
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
    )
}

export default Menu
