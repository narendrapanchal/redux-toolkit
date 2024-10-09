import React from 'react'
import Header from '../components/Header'
import { Footer } from '../components/Footer'
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const HomeRoute = () => {
  return (
    <div className='layout'>
    <div>
    <Header/>
    <ToastContainer />
    <Outlet/>
    </div>
    <Footer/>
    </div>
  )
}

export default HomeRoute