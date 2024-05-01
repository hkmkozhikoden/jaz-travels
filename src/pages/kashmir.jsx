import React from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import KashmirBanner from '../component/kashmir-banner'
import PricesHyderabad from '../component/prices-hyderabad'

const Kashmir = () => {
  return (
    <div>
        <Navbar></Navbar>
        <KashmirBanner/>
        <PricesHyderabad/>
        <Footer></Footer>
    </div>
  )
}

export default Kashmir
