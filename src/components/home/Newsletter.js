import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const useStyles = makeStyles(theme => ({
    contactDiv: {
        display: 'flex',
        padding: theme.spacing(2),
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    },
    headerDiv: {
        flex: '1',
        textAlign: 'center',
        maxWidth: '500px',
        minWidth: '350px'
    },
    contactForm: {
        display: 'flex',
        flex: '1',
        flexDirection: 'column',
        alignContent: 'space-around',
        padding: theme.spacing(1),
        maxWidth: '400px',
        minWidth: '350px'
    },
    txtFirstName: {
        flex: '1',
        padding: theme.spacing(1)
    },
    txtLastName: {
        flex: '1',
        padding: theme.spacing(1)
    },
    txtEmail: {
        flex: '2',
        padding: theme.spacing(1)
    },
    txtMessage: {
        flex: '2',
        padding: theme.spacing(1)
    },
    btnSubmit: {
        marginLeft: theme.spacing(2),
        maxWidth: '100px'
    }
}))

const Newsletter = () => {
    const classes = useStyles()
    return (
        <div className={classes.contactDiv}>
            <div className={classes.headerDiv}>
                <FontAwesomeIcon icon={faEnvelope} size='2x' />
                <Typography variant='h4'>
                    Sign up for our newsletter
                </Typography>
                <Typography variant='subtitle1'>
                    For weekly product reviews and specials
                </Typography>
            </div>
            <form className={classes.contactForm} noValidate autoComplete="off">
                <TextField className={classes.txtFirstName} id="txtName" label="Name" variant="outlined" />
                <TextField className={classes.txtEmail} id="txtEmail" label="Email" variant="outlined" />
                <Fab className={classes.btnSubmit} variant="extended" color='secondary'>
                    Submit
                </Fab>
            </form>
        </div>
    )
}

export default Newsletter
