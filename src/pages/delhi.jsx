import React from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import DelhiBanner from '../component/delhi-banner'
import PricesHyderabad from '../component/prices-hyderabad'

const Delhi = () => {
  return (
    <div>
      <Navbar/>
      <DelhiBanner/>
      <PricesHyderabad/>
      <Footer/>
    </div>
  )
}

export default Delhi
