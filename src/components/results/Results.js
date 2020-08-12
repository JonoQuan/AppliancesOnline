import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../reducers/Actions'
import ProductCard from './ProductCard'
import Header from './Header'
import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'

const Results = () => {
    const { query } = useParams()
    const dispatch = useDispatch()
    const products = useSelector(state => state.Data.products)
    const [filtered, setFiltered] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        let filteredData = querySearch(query)
        setFiltered(filteredData)
        setIsLoading(false)
    }, [query])

    function querySearch(query) {
        if (query != null) {
            let lowerCasedQuery = query.toLowerCase()
            let filteredData = products.filter(item => {
                return Object.keys(item).some(key =>
                    typeof item[key] === "string" && item[key].toLowerCase().includes(lowerCasedQuery))
            })
            return filteredData
        }
        else {
            return products
        }
    }


    const handleAdd = (product) => {
        dispatch(addToCart(product))
    }


    return (
        <>
            <Header query={query} />
            {isLoading ?
                <div></div>
                :
                <Grid container
                    alignContent='stretch'
                    justify='space-evenly' >
                    {filtered.map(product => (
                        <Grid item xs={6} md={4} key={product.Id}>
                            <ProductCard product={product} handleAdd={handleAdd} />
                        </Grid>
                    ))}
                </Grid>
            }
        </>
    )
}

export default Results
