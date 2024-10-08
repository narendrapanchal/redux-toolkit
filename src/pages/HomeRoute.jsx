import React from 'react'
import Header from '../components/Header'
import { Footer } from '../components/Footer'
import { Outlet } from "react-router-dom";


const HomeRoute = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default HomeRoute