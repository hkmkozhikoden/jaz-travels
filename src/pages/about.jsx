import React from 'react'
import PageBanner from '../component/page-banner'
import Navbar from '../component/navbar'
import Kerala from '../component/kerala'
import Counter from '../component/counter'
import Chooseus from '../component/chooseus'
import HomeContact from '../component/home-content'
import Footer from '../component/footer'

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <PageBanner></PageBanner>
      <Kerala></Kerala>
      <Chooseus></Chooseus>
      <Counter></Counter>
      <HomeContact></HomeContact>
      <Footer></Footer>
    </div>
  )
}

export default About
