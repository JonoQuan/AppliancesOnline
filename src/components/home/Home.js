import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../../reducers/DataActions'
import Banner from '././Banner'
import Featured from './Featured'
import Brands from './Brands'
import Newsletter from './Newsletter'

const Home = () => {

    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(fetchProducts())
    }, [])  

    return (
        <>
            <Banner />
            <Featured />
            <Brands />
            <Newsletter />
        </>
    )
}

export default Home
