import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory, useParams } from 'react-router-dom'
import {
    Typography,
    Button,
    Grid,
    Paper,
    FormControlLabel,
    FormLabel,
    Radio,
    MenuItem,
    Checkbox,
    FormControl,
    InputLabel,
    CircularProgress
} from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { TextField, RadioGroup, Select } from 'formik-material-ui'
import * as yup from 'yup'

const useStyles = makeStyles(theme => ({
    header: {
        margin: theme.spacing(3)
    },
    applicationForm: {
        margin: theme.spacing(4)
    },
    formSection: {
        padding: theme.spacing(2),
    },
    formField: {
        margin: theme.spacing(1),
        minWidth: '100px'
    },
    billingCheck: {
        paddingLeft: theme.spacing(1)
    },
    btnSubmit: {
        marginTop: theme.spacing(2),
        float: 'right'
    },
    btnProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%'
    },
    stateMenu: {
        paddingLeft: theme.spacing(1),
        paddingTop: theme.spacing(1),
    }
}))

const Checkout = () => {
    const classes = useStyles()
    const [billingCheck, setBillingCheck] = useState(false)
    const history = useHistory()
    const { order } = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [creditCard, setCreditCard] = useState({
        CardType: "",
        CardName: "",
        CardNo: "",
        CardExpMonth: "",
        CardExpYear: "",
        CardCcv: ""
    })

    const states = ['ACT', 'NSW', 'QLD', 'VIC', 'SA', 'WA', 'NT', 'TAS']

    const initialValues = {
        FName: "",
        Surname: "",
        Address: "",
        Suburb: "",
        State: "",
        Postcode: "",
        Phone: "",
        Email: "",
        EmailConfirm: "",
        BillingName: "",
        BillingAddress: "",
        BillingSuburb: "",
        BillingPostcode: "",
        BillingState: "",
        CardType: "",
        CardName: "",
        CardNo: "",
        CardExpMonth: "",
        CardExpYear: "",
        CardCcv: ""
    }


    const validationSchema = yup.object().shape({
        FName: yup
            .string()
            .required(' ')
            .max(50, "Too many characters"),
        Surname: yup
            .string()
            .required(' ')
            .max(50, "Too many characters"),
        Address: yup
            .string()
            .required(' ')
            .max(70, "Too many characters"),
        Suburb: yup
            .string()
            .required(' ')
            .max(40, "Too many characters"),
        State: yup
            .string()
            .required(' ')
            .max(3),
        Postcode: yup
            .string()
            .required(' ')
            .max(4, "Too long"),
        Phone: yup
            .string()
            .required(' ')
            .max(10, "Not a valid phone number"),
        Email: yup
            .string()
            .email('Invalid email')
            .required(' '),
        EmailConfirm: yup
            .string()
            .email('Invalid email')
            .oneOf([yup.ref('Email'), null], "Email does not match")
            .required('Please confirm email'),
        BillingName: yup
            .string()
            .required(' ')
            .max(50, "Too many characters"),
        BillingAddress: yup
            .string()
            .required(' ')
            .max(70, "Too many characters"),
        BillingSuburb: yup
            .string()
            .required(' ')
            .max(50, "Too many characters"),
        BillingState: yup
            .string()
            .required(' ')
            .max(3),
        BillingPostcode: yup
            .string()
            .required(' ')
            .max(4, "Too many digits"),
        CardType: yup
            .string()
            .required(' '),
        CardName: yup
            .string()
            .required(' ')
            .max(50, "Too many characters"),
        CardNo: yup
            .string()
            .required(' ')
            .min(16, "Must be 16 digits")
            .max(16, "Must be 16 digits"),
        CardExpMonth: yup
            .string()
            .required(' ')
            .min(2, "2 digits only. eg. March => 03")
            .max(2, "2 digits only. eg. March => 03"),
        CardExpYear: yup
            .string()
            .required(' ')
            .min(2, "2 digits only. eg. 2024 => 24")
            .max(2, "2 digits only. eg. 2024 => 24"),
        CardCcv: yup
            .string()
            .required(' ')
            .min(3, "3 digits only")
            .max(3, "3 digits only"),
    })


    const handleCheckbox = (values, setFieldValue) => {
        if (!billingCheck === true) {
            setFieldValue('BillingName', values.FName + " " + values.Surname)
            setFieldValue('BillingAddress', values.Address)
            setFieldValue('BillingSuburb', values.Suburb)
            setFieldValue('BillingState', values.State)
            setFieldValue('BillingPostcode', values.Postcode)
            setBillingCheck(!billingCheck)
        }
        else {
            setFieldValue("BillingName", "")
            setFieldValue("BillingAddress", "")
            setFieldValue("BillingSuburb", "")
            setFieldValue("BillingState", "")
            setFieldValue("BillingPostcode", "")
            setBillingCheck(!billingCheck)
            return
        }
    }

    // const DisplayFormikState = props =>
    //     <div style={{ margin: '1rem 0' }}>
    //         <h3 style={{ fontFamily: 'monospace' }} />
    //         <pre
    //             style={{
    //                 background: '#f6f8fa',
    //                 fontSize: '.65rem',
    //                 padding: '.5rem',
    //             }}
    //         >
    //             <strong>props</strong> ={' '}
    //             {JSON.stringify(props, null, 2)}
    //         </pre>
    //     </div>

    const submitCustomer = (values) => {

        let creditDetails = {
            CardType: values.CardType,
            CardName: values.CardName,
            CardNo: values.CardNo,
            CardExpMonth: values.CardExpMonth,
            CardExpYear: values.CardExpYear,
            CardCcv: values.CardCcv
        }
        setCreditCard(creditDetails)
        let updatedOrder = {
            FName: values.FName,
            Surname: values.Surname,
            Address: values.Address,
            Suburb: values.Suburb,
            State: values.State,
            Postcode: values.Postcode,
            Phone: values.Phone,
            Email: values.Email,
            BillingName: values.BillingName,
            BillingAddress: values.BillingAddress,
            BillingSuburb: values.BillingSuburb,
            BillingState: values.BillingState,
            BillingPostcode: values.BillingPostcode
        }
        const order = (JSON.stringify(updatedOrder))
        setIsLoading(true)
        setTimeout(() => {
            history.push(`/confirm/${order}`)
            setIsLoading(false)
        }, 2000)
    }

    return (
        <div className={classes.checkout}>
            <Typography className={classes.header} variant='h4' align='center' >
                Checkout
            </Typography>
            <Formik
                initialValues={order ? JSON.parse(order) : initialValues}
                onSubmit={values => submitCustomer(values)}
                validationSchema={validationSchema}
            >
                {props => {
                    const {
                        values,
                        setFieldValue,
                        billingCheck,
                        isValid,
                        isSubmitting,
                        isValidating
                    } = props;
                    return (
                        <Form className={classes.applicationForm}>
                            <Grid container
                                spacing={2}
                                justify='space-evenly'
                                alignItems='flex-start' >
                                <Grid item xs={12} sm={6} >
                                    <Grid container
                                        spacing={2}
                                        direction='column'
                                        justify='center'
                                        alignItems='center' >
                                        <Grid item >
                                            <Paper variant='outlined' className={classes.formSection}>
                                                <Typography variant='h6' align='center' >Shipping Details</Typography>
                                                <Field className={classes.formField}
                                                    name="FName"
                                                    label="First Name"
                                                    component={TextField}
                                                    fullWidth
                                                    variant='outlined'
                                                />
                                                <Field className={classes.formField}
                                                    name="Surname"
                                                    label="Surname"
                                                    component={TextField}
                                                    fullWidth
                                                    variant='outlined'
                                                />
                                                <Field className={classes.formField}
                                                    name="Address"
                                                    label="Address"
                                                    component={TextField}
                                                    fullWidth
                                                    variant='outlined'
                                                />
                                                <Field className={classes.formField}
                                                    name="Suburb"
                                                    label="Suburb"
                                                    component={TextField}
                                                    fullWidth
                                                    variant='outlined'
                                                />
                                                <FormControl
                                                    variant='outlined' >
                                                    <InputLabel className={classes.stateMenu}>State</InputLabel>
                                                    <Field className={classes.formField}
                                                        name="State"
                                                        component={Select}
                                                    >
                                                        {states.map(state =>
                                                            <MenuItem key={state} value={state}>{state}</MenuItem>)}
                                                    </Field>
                                                </FormControl>
                                                <Field className={classes.formField}
                                                    name="Postcode"
                                                    label="Postcode"
                                                    component={TextField}
                                                    variant='outlined'
                                                />
                                                <Field className={classes.formField}
                                                    name="Phone"
                                                    label="Phone"
                                                    component={TextField}
                                                    variant='outlined'
                                                />
                                                <Field className={classes.formField}
                                                    type="email"
                                                    name="Email"
                                                    label="Email"
                                                    component={TextField}
                                                    fullWidth
                                                    variant='outlined'
                                                />
                                                <Field className={classes.formField}
                                                    name="EmailConfirm"
                                                    label="Confirm Email"
                                                    component={TextField}
                                                    fullWidth
                                                    variant='outlined'
                                                />
                                            </Paper>
                                        </Grid>
                                        <Grid item >
                                            <Paper variant='outlined' className={classes.formSection}>
                                                <Typography variant='h6' align='center' >Billing Details</Typography>
                                                <FormControlLabel
                                                    className={classes.billingCheck}
                                                    control={
                                                        <Checkbox
                                                            checked={billingCheck}
                                                            onChange={() => handleCheckbox(values, setFieldValue)}
                                                            name="BillingCheck"
                                                            color="primary"
                                                        />
                                                    }
                                                    label="Same as shipping"
                                                />
                                                <Field className={classes.formField}
                                                    name="BillingName"
                                                    label="Full Name"
                                                    component={TextField}
                                                    fullWidth
                                                    variant='outlined'
                                                />
                                                <Field className={classes.formField}
                                                    name="BillingAddress"
                                                    label="Address"
                                                    component={TextField}
                                                    fullWidth
                                                    variant='outlined'
                                                />
                                                <Field className={classes.formField}
                                                    name="BillingSuburb"
                                                    label="Suburb"
                                                    component={TextField}
                                                    fullWidth
                                                    variant='outlined'
                                                />
                                                <FormControl
                                                    variant='outlined' >
                                                    <InputLabel className={classes.stateMenu} >State</InputLabel>
                                                    <Field className={classes.formField}
                                                        name="BillingState"
                                                        component={Select}
                                                    >
                                                        {states.map(state =>
                                                            <MenuItem key={state} value={state}>{state}</MenuItem>)}
                                                    </Field>
                                                </FormControl>
                                                <Field className={classes.formField}
                                                    name="BillingPostcode"
                                                    label="Postcode"
                                                    component={TextField}
                                                    variant='outlined'
                                                />
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Paper variant='outlined' className={classes.formSection}>
                                        <Typography variant='h6' align='center' >Card Details</Typography>
                                        <FormLabel component="legend">Card Type</FormLabel>
                                        <Field name="CardType" aria-label="contact" component={RadioGroup} direction='row'>
                                            <FormControlLabel value="VISA" control={<Radio />} label="VISA" />
                                            <FormControlLabel value="Mastercard" control={<Radio />} label="Mastercard" />
                                        </Field>
                                        <Field className={classes.formField}
                                            name="CardName"
                                            label="Name on card"
                                            component={TextField}
                                            fullWidth
                                            variant='outlined'
                                        />
                                        <Field className={classes.formField}
                                            name="CardNo"
                                            label="Card number"
                                            component={TextField}
                                            fullWidth
                                            variant='outlined'
                                        />
                                        <Field className={classes.formField}
                                            name="CardExpMonth"
                                            label="MM"
                                            component={TextField}
                                            size='small'
                                            variant='outlined'
                                        />
                                        <Field className={classes.formField}
                                            name="CardExpYear"
                                            label="YY"
                                            component={TextField}
                                            size='small'
                                            variant='outlined'
                                        />
                                        <Field className={classes.formField}
                                            name="CardCcv"
                                            label="CCV"
                                            component={TextField}
                                            size='small'
                                            variant='outlined'
                                        />
                                    </Paper>
                                        <Button
                                            className={classes.btnSubmit}
                                            type='submit'
                                            variant='contained'
                                            disableElevation
                                            color='secondary'
                                            size='large'
                                            disabled={!isValid || isSubmitting || isValidating || isLoading}
                                        >
                                            Checkout
                                    </Button>
                                        {isLoading && <CircularProgress size={100} className={classes.btnProgress} />}
                                </Grid>
                            </Grid>
                            {/* <DisplayFormikState {...props} /> */}
                        </Form>
                    )
                }
                }
            </Formik>
        </div >
    )
}
export default Checkout
