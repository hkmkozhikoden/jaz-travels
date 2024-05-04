import React from 'react'
import Kerala1 from '../assets/img/kerala/kerala.jpg'
import Kerala2 from '../assets/img/kerala/kerala2.jpg'
import '../assets/css/kerala.css'
const Kerala = () => {
  return (
    <div>
      <section className='kerala bg-l-white'> 
        <div className="container">
            <div className="row">
              <div className="col-md-6" data-aos="zoom-in-right" data-aos-offset="10">
                <h2 className='sub head '>
                Welcome To Global Tours Kerala
                </h2>
                <p>
                   Welcome to Global Tours and Travels the leading in high quality of services in tours and travels field. In 2018 we established our firm in Peravoor after 20 years of   experience in the abroad. Now global tours and travels is one of the leading travel agencies in Kerala. That renders quality travel services to corporate and individual customers. We offer a variety of exciting tours and experiences across the globe.. Since then we are the most trusted and respected name in the travel industry.
                </p>
                <p>
                   Welcome to Global Tours and Travels the leading in high quality of services in tours and travels field. In 2018 we established our firm in Peravoor after 20 years of experience in the abroad. Now global tours and travels is one of the leading travel agencies in Kerala. That renders quality travel services to corporate and individual customers. We offer a variety of exciting tours and experiences across the globe.. Since then we are the most trusted and respected name in the travel industry.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora recusandae dolor nesciunt maxime laudantium in, consectetur aliquid sint repudiandae iure itaque incidunt, officia minus similique nobis repellat quos. Quas, suscipit.
                </p>
                <button className='btn-gray'>Explore more</button>
              </div>
              <div className="col-md-6 mb-3 mt-3">
               <div className="row align-items-between">
                  <div className="col-md-12" data-aos="zoom-in-left" data-aos-offset="10">
                    <img src={Kerala1} alt="kerala img" className='kerala-img' />
                  </div>
                  {/* <div className="col-md-6 mb-3 mt-3" data-aos="zoom-in-left" data-aos-offset="10">
                    <img src={Kerala2} alt="kerala img" className='kerala-img b' />
                  </div> */}
               </div>
              </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Kerala
