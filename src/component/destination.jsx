import React from 'react'
import Kerala from '../assets/img/world/1.jpg'
import Kerala1 from '../assets/img/world/2.jpg'
import Kerala2 from '../assets/img/world/3.jpg'
import Kerala3 from '../assets/img/world/4.jpg'
import Kerala4 from '../assets/img/world/5.jpg'
import '../assets/css/destination.css'
const Destination = () => {
  return (
    <div>
      <section className='destination'>
         <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-12 text-center mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                    <h6>TOURS</h6>
                    <h1 className='text-uppercase sub-head'>International</h1>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                    <div className="card-sec">
                      <div className="card-img">
                         <img src={Kerala} alt="destination 1" className='trip-img' />
                      </div>
                        <div className="dest-cont text-center mt-3">
                            <h5 className='text-uppercase sub-head'>dubai</h5>
                            <h5>from $300</h5>
                            <button className='btn-l-expolre mb-3'> View More</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                    <div className="card-sec">
                       <div className="card-img">
                       <img src={Kerala1} alt="destination 1" className='trip-img' />
                       </div>
                        <div className="dest-cont text-center mt-3">
                            <h5 className='text-uppercase sub-head'>dubai</h5>
                            <h5>from $300</h5>
                            <button className='btn-l-expolre mb-3'> View More</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                    <div className="card-sec">
                       <div className="card-img">
                       <img src={Kerala2} alt="destination 1" className='trip-img' />
                       </div>
                        <div className="dest-cont text-center mt-3">
                            <h5 className='text-uppercase sub-head'>dubai</h5>
                            <h5>from $300</h5>
                            <button className='btn-l-expolre mb-3'> View More</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                    <div className="card-sec">
                        <div className="card-img">
                        <img src={Kerala3} alt="destination 1" className='trip-img' />
                        </div>
                        <div className="dest-cont text-center mt-3">
                            <h5 className='text-uppercase sub-head'>dubai</h5>
                            <h5>from $300</h5>
                            <button className='btn-l-expolre mb-3'> View More</button>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </section>
      <section className='destination'>
         <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-12 text-center mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                    <h6>TOURS</h6>
                    <h1 className='text-uppercase sub-head'>National</h1>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                    <div className="card-sec">
                        <div className="card-img">
                        <img src={Kerala} alt="destination 1" className='trip-img' />
                        </div>
                        <div className="dest-cont text-center mt-3">
                            <h5 className='text-uppercase sub-head'>Delhi</h5>
                            <h5>from $300</h5>
                            <button className='btn-l-expolre mb-3'> View More</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                    <div className="card-sec">
                        <div className="card-img">
                        <img src={Kerala2} alt="destination 1" className='trip-img' />
                        </div>
                        <div className="dest-cont text-center mt-3">
                            <h5 className='text-uppercase sub-head'>Mumbai</h5>
                            <h5>from $300</h5>
                            <button className='btn-l-expolre mb-3'> View More</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                    <div className="card-sec">
                        <div className="card-img">
                        <img src={Kerala1} alt="destination 1" className='trip-img' />
                        </div>
                        <div className="dest-cont text-center mt-3">
                            <h5 className='text-uppercase sub-head'>hydrabad</h5>
                            <h5>from $300</h5>
                            <button className='btn-l-expolre mb-3'> View More</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                    <div className="card-sec">
                        <div className="card-img">
                        <img src={Kerala4} alt="destination 1" className='trip-img' />

                        </div>
                        <div className="dest-cont text-center mt-3">
                            <h5 className='text-uppercase sub-head'>gujarat</h5>
                            <h5>from $300</h5>
                            <button className='btn-l-expolre mb-3'> View More</button>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </section>
    </div>
  )
}

export default Destination
