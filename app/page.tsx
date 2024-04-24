"use client"
import React, { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import FeaturedProduct from './components/FeaturedProduct'
import TopProduct from './components/TopProduct'
import BestSelling from './components/BestSelling'
import News from './components/News'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Homepage = () => {
  // Animation setup
  useEffect(() =>{
   AOS.init({
    duration: 1000,
    easing:"ease",
    once:true,
    anchorPlacement:"top-bottom",
    

   })
  }, [])
  return (
    <div className="">
      <Nav/>
      <Hero/>
      <FeaturedProduct/>
      <TopProduct/>
      <BestSelling/>
      <News/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Homepage