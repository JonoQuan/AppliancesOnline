import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import Header from './Header'
import { useParams } from "react-router-dom"
import { CartContext } from '../../contexts/CartContext'
import { Grid } from '@material-ui/core'


const Results = () => {
    let { query } = useParams()
    const { dummyData } = useContext(CartContext)

    return (
        <>
            <Header query={query} />
            <Grid container
                justify='space-evenly' >
                {dummyData.map(product => (
                    <Grid item key={product.Id} >
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Results
