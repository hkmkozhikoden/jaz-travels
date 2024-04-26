import React from 'react'
import Navbar from '../component/navbar'
import Banner from './banner'
import '../assets/modules/boostrap/bootstrap.css'
import BannerSms from '../component/banner-sms'
import Blogslider from '../component/blog-sldier'
import Kerala from '../component/kerala'
import Destination from '../component/destination'
import Footer from '../component/footer'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <BannerSms/>
      <Blogslider></Blogslider>
      <Kerala></Kerala>
      <Destination></Destination>
      <Footer></Footer>
    </div>
  )
}

export default Home
