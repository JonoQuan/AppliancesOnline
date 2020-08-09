import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    AppBar,
    Toolbar,
    Grid,
    Button,
} from '@material-ui/core'



const useStyles = makeStyles(theme => ({
    subNav: {
        boxShadow: 'none',
        backgroundColor: 'white'
    },
}));


const SubNav = ({ subCategory }) => {
    const classes = useStyles()

    return (
        <div className={classes.subNav}>
            <AppBar position="static" color='primary'>
                <Toolbar>
                    <Grid container
                        justify='space-evenly'>
                        <Grid item>
                            <Button size='large' style={{color: '#F2EBD5'}} onClick={subCategory} >Kettles</Button>
                        </Grid>
                        <Grid item>
                            <Button size='large' style={{color: '#F2EBD5'}} onClick={subCategory} >Microwaves</Button>
                        </Grid>
                        <Grid item>
                            <Button size='large' style={{color: '#F2EBD5'}} onClick={subCategory} >Toasters</Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default React.memo(SubNav)
