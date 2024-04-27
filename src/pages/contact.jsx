import React from 'react'
import PageBanner from '../component/page-banner'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import ContactInfo from '../component/contact-info'


const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <PageBanner></PageBanner>
      <ContactInfo></ContactInfo>
      <Footer></Footer>
    </div>
  )
}

export default Contact
