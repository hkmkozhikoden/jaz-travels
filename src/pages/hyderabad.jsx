import React from 'react'
import HyderabadBanner from '../component/hyderabad-banner'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import PricesHyderabad from '../component/prices-hyderabad'

const Hyderabad = () => {
  return (
    <div>
        <Navbar/>
      <HyderabadBanner/>
      <PricesHyderabad/>
      <Footer/>
    </div>
  )
}

export default Hyderabad
