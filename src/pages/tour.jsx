import React from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import Kerala from '../component/kerala'
import KashmirBanner from '../component/kashmir-banner'

const Tour = () => {
  return (
    <div>
      <Navbar />
    <KashmirBanner/>
      <Kerala></Kerala>
      <Footer />
    </div>
  )
}

export default Tour
