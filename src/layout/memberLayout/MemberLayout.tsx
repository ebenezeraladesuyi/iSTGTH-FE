// import React from 'react'

import { Outlet } from "react-router-dom"
import { Header } from "../../components"

const MemberLayout = () => {
  return (
    <div>

        <Header />

        <Outlet />

    </div>
  )
}

export default MemberLayout