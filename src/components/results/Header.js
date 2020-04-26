import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Typography,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    header: {
        margin: theme.spacing(2),
        textAlign: 'center'
    },
}));

const Header = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.header}>
            <Typography variant='h4' align='center'>
                Results matching "{props.query}"
            </Typography>
        </div>
    )
}

export default Header
