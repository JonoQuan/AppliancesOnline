import React from 'react'
import Navbar from './../navbar/Navbar'
import Banner from '././Banner'
import Featured from './Featured'
import Brands from './Brands'
import Newsletter from './Newsletter'

const Home = () => {

    return (
        <>
            <Navbar />
            <Banner />
            <Featured />
            <Brands />
            <Newsletter />
        </>
    )
}

export default Home
