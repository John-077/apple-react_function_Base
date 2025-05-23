import React from 'react'
import Header from "../../component/Header/Header"
import Footer from '../../component/Footer/Footer'
import { Outlet } from 'react-router'
import YouTubeApi from '../../component/YouTubeApi/YouTubeApi'

function Sheard() {
  return (
    <>
    
      <Header/>
      <Outlet/>
      <YouTubeApi/>
      <Footer/>
      
    </>
  )
}

export default Sheard
