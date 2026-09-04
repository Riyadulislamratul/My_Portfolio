import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'
import ScrollProgress from './ScrollProgress'
import Cursor from './Cursor'
import ScrollToTop from './ScrollToTop'

const MainLayout = () => {
  return (
    <>
    <Cursor />
    <ScrollToTop />
    <ScrollProgress />
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default MainLayout