import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Intro from '../components/Intro'
import Details from '../components/Details'
import RecentWorks from '../components/RecentWorks'
import Feedback from '../components/Feedback'
import Blog from '../components/Blog'
import Pricing from '../components/Pricing'
import TechStack from '../components/TechStack'

const HomePage = () => {
  return (
    <>
    <Hero />
    <Services />
    <Intro />
    <Details />
    <RecentWorks />
    {/* <Feedback /> */}
    <Blog />
    <TechStack />
    {/* <Pricing /> */}
    </>
  )
}

export default HomePage