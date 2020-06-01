import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid, Fab } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import womanHeadset from '../../images/woman-headset.png'
import * as yup from 'yup'

const useStyles = makeStyles(theme => ({
    contactDiv: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4)
    },
    header: {
    },
    body: {
        margin: theme.spacing(2)
    },
    imgContainer: {
        width: '300px',
        margin: theme.spacing(2)
    },
    img: {
        width: '100%',
    },
    formSection: {
        flex: '1',
        flexWrap: 'wrap',
        textAlign: 'left',
        margin: theme.spacing(3)
    },
    fieldGroup: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: theme.spacing(2)
    },
    formField: {
        flex: '1',
        margin: theme.spacing(2),
        minWidth: '200px'
    },
    radioGroup: {
        display: 'flex',
        flexDirection: 'row'
    },
    btnSubmit: {
        width: 'max-content',
        margin: theme.spacing(4)
    }
}));


const Contact = () => {
    const classes = useStyles()

    const initialValues = {
        fullname: "",
        email: "",
        message: ""
    }

    const validationSchema = yup.object().shape({
        fullname: yup
            .string()
            .required('First Name is required')
            .max(50, "Max 50 characters"),
        email: yup
            .string()
            .email('Invalid email')
            .required('Please enter a valid email address'),
        message: yup
            .string()
            .required('Please leave a message')
            .max(250),
    })

    return (
        <>
            <div className={classes.contactDiv} >
                <Grid container
                    alignItems='baseline'
                    justify='space-evenly' >
                    <Grid item xs={10} sm={4}>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={values => {
                                alert(JSON.stringify(values, null, 2));
                            }}
                            validationSchema={validationSchema}
                        >
                            {props => {
                                return (<Form className={classes.applicationForm}>
                                    <div className={classes.formSection}>
                                        <Typography variant='h4' gutterBottom >
                                            Need a hand?
                                        </Typography>
                                        <Typography variant='subtitle2'>
                                            Reach out to us and we'll lend a helping hand.
                                            Just leave your details in the form below.
                                        </Typography>
                                        <div className={classes.fieldGroup}>
                                            <Field className={classes.formField}
                                                name="fullname"
                                                label="Full Name"
                                                component={TextField}
                                                variant='outlined'
                                            />
                                            <Field className={classes.formField}
                                                type="email"
                                                name="email"
                                                label="Email"
                                                component={TextField}
                                                variant='outlined'
                                            />
                                            <Field className={classes.formField}
                                                name="message"
                                                label="Message"
                                                multiline
                                                rows={4}
                                                component={TextField}
                                                variant='outlined'
                                            />
                                        </div>
                                    </div>
                                    <Fab className={classes.btnSubmit} type="submit" variant="extended" color='secondary'>
                                        Submit
                        </Fab>
                                    {/* <DisplayFormikState {...props} /> */}
                                </Form>
                                )
                            }
                            }
                        </Formik>
                    </Grid>
                    <Grid item xs={10} sm={4}>
                        <Typography variant='subtitle2' gutterBottom>
                            Alternatively, you may contact us by phone or post.
                        </Typography>
                        <Typography variant='subtitle1' gutterbottom >
                            Appliances Online
                        </Typography>
                        <Typography variant='subtitle1' >
                            206 Bourke Street<br />
                            Melbourne VIC 3000
                        </Typography>
                        <Typography variant='subtitle1' >
                            Ph: (03) 9658 9500
                        </Typography>
                        <div className={classes.imgContainer}>
                            <img
                                src={womanHeadset}
                                className={classes.img}
                                alt='woman-headset' />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Contact
