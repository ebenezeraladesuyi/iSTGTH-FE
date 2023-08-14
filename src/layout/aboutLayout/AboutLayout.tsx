// import React from 'react'

import { Outlet } from "react-router-dom"
import { Header } from "../../components"
import Footer from "../../pages/homePages/Footer"

const AboutLayout = () => {
  return (
    <div>

        <Header />

        <Outlet />

        <Footer />


    </div>
  )
}

export default AboutLayout