import React from 'react'
import '../assets/css/map.css'
function Map() {
  return (
    <div className='map-sec'>
     <div className="row justify-content-center">
      <div className="col-md-12">
      <iframe title='jaz-travels' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31319.544813540382!2d76.09145449709601!3d11.117615649355466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6367a09827289%3A0xa5bab8b1f3018ca4!2sManjeri%2C%20Kerala!5e0!3m2!1sen!2sin!4v1714159612523!5m2!1sen!2sin" width="100%" height="550" border="none" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>      
      </div>
     </div>
    </div>
  )
}

export default Map;
