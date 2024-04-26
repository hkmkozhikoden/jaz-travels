import React from 'react'
import '../assets/css/bannersms.css';
import Users from '../assets/img/icons/users.png'
import Sms from '../assets/img/icons/sms.png'
const BannerSms = () => {
  return (
    <div>
      <section className='p-0 sms-sec'>
        <div className="container">
            <div className="sms-card">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="search-box-single">
                            <div className="image-sec">
                                <img src={Users} alt="user image " className='user-img' />
                            </div>
                            <div className="cont ms-2">
                                <input type="text" placeholder='Enter your Name' />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="search-box-single">
                            <div className="image-sec">
                              <img src={Sms} alt="user image " className='user-img' />
                            </div>
                            <div className="cont ms-2">
                            <input type="email" placeholder='Enter your email' />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                         <div className="search-box-single">
                            <button type="submit" class="btn-sms-submit w-100 h-100">ENQUIRE NOW</button>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default BannerSms
