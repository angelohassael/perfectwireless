import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import Repair from '../components/repairs/Repairs'
import Transfer from '../components/transfers/Transfer';
import Accessories from '../components/accessories/Accessories'
import Footer from "../components/footer/Footer"

const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <Repair/>
    <Transfer/>
    <Accessories/>
    <Footer/>
    </>
  )
}

export default Home