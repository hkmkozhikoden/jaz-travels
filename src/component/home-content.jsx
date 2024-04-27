import React from 'react'
import '../assets/css/home-contact.css'
const HomeContact = () => {
  return (
    <div>
      <section className='home-contact'>
        <div className="container">
            <div className="row">
                <div className="col-md-12" data-aos="fade-up" data-aos-offset="10">
                    <div className="contact-info text-center">
                        <h4 className='text-uppercase'>Contact Now</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita id illum accusantium, blanditiis esse sequi architecto eaque ullam deserunt autem
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste voluptatum ex non aliquid tempora, facere rem deserunt quasi esse, eius quae ipsa ipsam temporibus! Adipisci numquam modi pariatur ut dolore!</p>
                        <a href='/contact' className='btn-home-cont text-uppercase' data-aos="fade-up"  data-aos-offset="10">Contact</a>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default HomeContact
