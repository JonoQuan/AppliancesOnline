import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles(theme => ({
    returnsDiv: {
        margin: theme.spacing(4)
    }
}))

const Returns = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.returnsDiv}>
                <Typography variant='h4' gutterBottom >
                    Returns Policy
            </Typography>
                <Typography variant='body1' paragraph >
                    Thank you for shopping with Appliances Online.<br />
                If you are not entirely satisfied with your purchase, we're here to help.
            </Typography>
                <Typography variant='h6' gutterBottom >
                    Returns
            </Typography>
                <Typography variant='body1' paragraph >
                    You have 30 calendar days to return an item from the date you receive it.<br />
                To be elegible for a return, your item must be unused and in the same condition that you received it.<br />
                Your item must be in the original packaging.<br />
                Your item needs to have the receipt or proof of purchase.
            </Typography>
                <Typography variant='h6' gutterBottom >
                    Refunds
            </Typography>
                <Typography variant='body1' paragraph >
                    Once we receive your item, we will inspect it and notify you that we have received your returned item.
                We will immediately notify you on the status of your refund after inspecting the item.<br />
                If your return is approved, we will initiate a refund to your credit card (or original method of payment).<br />
                You will receive the credit within a certain amount of days, depending on your card issuer's policies.
            </Typography>
                <Typography variant='h6' gutterBottom >
                    Shipping
            </Typography>
                <Typography variant='body1' paragraph >
                    You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are nonrefundable.<br />
                If you receive a refund, the cost of return shipping will be deducted from your refund.
            </Typography>
                <Typography variant='h6' gutterBottom >
                    Contact
            </Typography>
                <Typography variant='body1' paragraph >
                    If you have any questions on how to return your item to us, <Link href="/contact">contact us</Link>.
                </Typography>
            </div>
        </>
    )
}

export default Returns
