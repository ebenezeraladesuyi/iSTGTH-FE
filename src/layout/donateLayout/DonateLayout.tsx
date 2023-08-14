// import React from 'react'


import { Outlet } from "react-router-dom"
import { Header } from "../../components"

const DonateLayout = () => {
  return (
    <div>

        <Header />

        <Outlet />

    </div>
  )
}

export default DonateLayout;