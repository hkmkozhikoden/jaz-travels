import React from 'react'
import Choose1 from '../assets/img/icons/facility.svg'
import '../assets/css/chooseus.css'
const Chooseus = () => {
  return (
    <div>
      <section className='choose-us'>
        <div className="container">
            <div className="row align-items-center justify-contnet-center">
                <div className="col-12 text-center mb-3 mb-md-4">
                    <h6>Global tuor</h6>
                    <h3 className='sub-head'>WHY CHOOSE US</h3>
                </div>
                <div className="col-md-6 col-lg-3" data-aos="zoom-in-right" data-aos-offset="10">
                    <div className="choose-card">
                        <img className='choose-img mb-3 mb-md-4' src={Choose1} alt="choose us image" />
                        <h3 className='sub-head text-center'>Hotel Booking</h3>
                        <p className='text-justify'>Lorem ipsum dolor sit amet 12 consectetur adipisicing elit. Veritatis blanditiis doloribus error necessitatibus omnis quas mollitia illum deserunt reprehenderit beatae.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3" data-aos="zoom-in-up" data-aos-offset="10">
                    <div className="choose-card">
                        <img className='choose-img mb-3 mb-md-4' src={Choose1} alt="choose us image" />
                        <h3 className='sub-head text-center'>Hotel Booking</h3>
                        <p className='text-justify'>Lorem ipsum dolor sit amet 12 consectetur adipisicing elit. Veritatis blanditiis doloribus error necessitatibus omnis quas mollitia illum deserunt reprehenderit beatae.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3" data-aos="zoom-in-up" data-aos-offset="10">
                    <div className="choose-card">
                        <img className='choose-img mb-3 mb-md-4' src={Choose1} alt="choose us image" />
                        <h3 className='sub-head text-center'>Hotel Booking</h3>
                        <p className='text-justify'>Lorem ipsum dolor sit amet 12 consectetur adipisicing elit. Veritatis blanditiis doloribus error necessitatibus omnis quas mollitia illum deserunt reprehenderit beatae.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3" data-aos="zoom-in-left" data-aos-offset="10">
                    <div className="choose-card">
                        <img className='choose-img mb-3 mb-md-4' src={Choose1} alt="choose us image" />
                        <h3 className='sub-head text-center'>Hotel Booking</h3>
                        <p className='text-justify'>Lorem ipsum dolor sit amet 12 consectetur adipisicing elit. Veritatis blanditiis doloribus error necessitatibus omnis quas mollitia illum deserunt reprehenderit beatae.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Chooseus
