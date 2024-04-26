import React from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import PageBanner from '../component/page-banner'
import Blogcard from '../component/blogcard'

const Blog = () => {
  return (
    <div>
      <Navbar></Navbar>
      <PageBanner></PageBanner>
      <Blogcard></Blogcard>
      <Footer></Footer>
    </div>
  )
}

export default Blog
