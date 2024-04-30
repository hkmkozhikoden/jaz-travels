import React from 'react'
import Navbar from '../component/navbar'
import Banner from '../component/banner'
import '../assets/modules/boostrap/bootstrap.css'
import BannerSms from '../component/banner-sms'
import Blogslider from '../component/blog-sldier'
import Kerala from '../component/kerala'
import Destination from '../component/destination'
import Footer from '../component/footer'
import HomeContact from '../component/home-content'
import Testimonial from '../component/testimonial'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <BannerSms/>
      <Blogslider></Blogslider>
      <Kerala></Kerala>
      <Destination></Destination>
      <HomeContact></HomeContact>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  )
}

export default Home
