import React from 'react'
import PageBanner from '../component/page-banner'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import ContactInfo from '../component/contact-info'
import Map from '../component/map'


const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <PageBanner></PageBanner>
      <ContactInfo></ContactInfo>
      <Map></Map>
      <Footer></Footer>
    </div>
  )
}

export default Contact
