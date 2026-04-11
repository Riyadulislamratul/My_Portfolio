import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'
import ScrollProgress from './ScrollProgress'
import Cursor from './Cursor'

const MainLayout = () => {
  return (
    <>
    <Cursor />
    <ScrollProgress />
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default MainLayout