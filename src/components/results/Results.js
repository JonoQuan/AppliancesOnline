import React, { useState } from 'react'
import Navbar from './../navbar/Navbar'
import ProductCard from './ProductCard'
import Header from './Header'
import { useHistory, useParams } from "react-router-dom"


const Results = () => {
    let { query } = useParams()
    let history = useHistory()
    const [resultQuery, setResultQuery] = useState(query)

    const handleQueryChange = e => {
        setResultQuery(e.target.value)
    }

    const querySubmit = e => {
        e.preventDefault()
        history.push(`/results/${resultQuery}`, {
            query: resultQuery
        })
    }

    return (
        <>
            <Navbar query={query} handleQueryChange={handleQueryChange} querySubmit={querySubmit} />
            <Header query={query} />
            <ProductCard />
        </>
    )
}

export default Results
