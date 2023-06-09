import React from 'react'
import Hero from '../common/Hero'
import Services from './Services'
import About from '../about/About'
import Category from '../Programs/Category'
import Popular from './Popular'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <>
    <Hero />
    <Services />
    <About />
    <Category />
    <Testimonials />
    <Popular />
    </>
  )
}

export default Home