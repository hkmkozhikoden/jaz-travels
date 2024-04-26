import React from 'react'
import '../assets/css/contact-info.css'
const ContactInfo = () => {
  return (
    <div>
      <section className='contact-form'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6" data-aos="fade-right" data-aos-offset="10">
                  <div className="contact-info text-white" data-aos="fade-right" data-aos-offset="10">
                    <h3 className='sub-head '>Contact Info</h3>
                    <p className=''>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                    <div className="row">
                        <div className="col-md-6">
                        <input type="text" className="form-control form-group" placeholder="Name" required />
                        </div>
                        <div className="col-md-6">
                        <input type="number" className="form-control form-group" placeholder="phone number" required />
                        </div>
                        <div className="col-md-12">
                        <input type="email" className="form-control form-group" placeholder="Email" required />
                        </div>
                        <div className="col-md-12">
                        <input type="text" className="form-control form-group" placeholder="Subject" required />
                        </div>
                        <div className="col-md-12">
                        <input type="text" className="form-control form-group" placeholder="Message" required />
                        </div>
                        <div className="col-12" data-aos="fade-up" data-aos-offset="10">
                            <button className='btn-submit'>Sumbit</button>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 offset-md-1 "data-aos="fade-left" data-aos-offset="10">
                    <div className="adress-sec text-white">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-3 mt-3">
                            <h6>Email</h6>
                            <h6>jaztravels@gmail.com</h6>
                        </div>
                        <div className="col-md-6 mb-3 mt-3">
                            <h6>Email</h6>
                            <h6>jaztravels@gmail.com</h6>
                        </div>
                        <div className="col-md-6 mb-3 mt-3">
                            <h6>Phone</h6>
                            <h6>99999999999</h6>
                            <h6>99999999999</h6>
                        </div>
                        <div className="col-md-6 mb-3 mt-3">
                            <h6>Phone</h6>
                            <h6>99999999999</h6>
                            <h6>99999999999</h6>
                        </div>
                        <div className="col-md-6 mb-3 mt-3">
                            <h6>Address</h6>
                            <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h6>
                        </div>
                        <div className="col-md-6 mb-3 mt-3">
                            <h6>Address</h6>
                            <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h6>
                        </div>
                        <div className="col-12" data-aos="fade-up" data-aos-offset="10">
                        <button className='btn-submit'>Live chat</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default ContactInfo
