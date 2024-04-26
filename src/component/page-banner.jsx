import React from 'react'
import '../assets/css/page-banner.css';
import Banner from '../assets/img/world/4.jpg'
const PageBanner = () => {
  return (
    <div>
      <section className='page-banner '>
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-md-10" >
                    <div className="banner-inner text-center position-relative">
                       <div className="banner-cont position-relative">
                       <h5 className='mb-3' data-aos="fade-up" data-aos-offset="10">Welcome to Gobal </h5>
                        <h2 className='sub-head mb-3 mt-3' data-aos="fade-up" data-aos-offset="10">WE ARE THE BEST TOUR AND TRAVEL AGENCY IN THE WORLD</h2>
                       </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="page-img postion-relative">
          <img className='banner-img' src={Banner} alt="page banner" />
        </div>
      </section>
    </div>
  )
}

export default PageBanner
