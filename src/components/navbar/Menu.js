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

    const toggleShopMenu = () => {
        setShopOpen(!shopOpen);
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
                        <ListItem button value="" className={classes.nested} onClick={subCategory}>
                            <ListItemText primary="All Products" />
                        </ListItem>
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
            </List>
        </div>
    )
}

export default React.memo(Menu)
