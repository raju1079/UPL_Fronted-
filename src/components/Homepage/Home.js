import React, { useLayoutEffect } from 'react'
import Hero from '../common/Hero'
import Services from './Services'
import About from '../about/About'
import Category from '../Programs/Category'
import Popular from './Popular'
import Testimonials from './Testimonials'
import { useLocation } from 'react-router-dom'
import HeroPromotion from '../promotion/HeroPromotion'
import AllProgramsButton from './AllProgramsButton'

const Home = () => {
  const location = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
    {/* <Hero /> */}
    <HeroPromotion />
    <Services />
    <Category />
    <Testimonials />
    <Popular />
    <AllProgramsButton />
    </>
  )
}

export default Home