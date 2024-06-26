import React from 'react'
import Slider from 'react-slick'
import '../assets/css/blog-slide.css'
import Blog1 from '../assets/img/img/kashmir.jpg'
import Blog2 from '../assets/img/img/kashmir 1.jpg'
import Blog3 from '../assets/img/img/delhi.jpg'
const Blogslider = () => {
    const settings = {
      dots: true,
      arrows: false,
      slidesToScroll:1,
      slidesToShow:3,
      autoplay: true,
      autoplaySpeed: 2500,
      responsive: [{
 
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true
        }
   
      }, {
   
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true
        }
   
      }]
    };
    
   
  return (
    <div>
      <section className='blog-sliders'>
        <div className="container">
           <div className="row align-items-center justify-content-center">
              <div className="col-12 mt-2 mb-2">
                <h3 className='text-center sub-head text-uppercase'>Our Main package</h3>
              </div>
              <div className="col-12" data-aos="fade-up" data-aos-offset="10">
                <div className="blog-slider-slick justify-content-center">
                     <Slider {...settings}>
                         {data.map((d, index) => (
                             <div key={index} className='blog-slick'>
                                 <div className="blog-card">
                                     <div className="img-card position-relative">
                                     <img src={d.img} alt={d.name}  className='blog-img'/>
                                     </div>
                                     <div className="blog-cont">
                                         <h4 className='text-uppercase fw-bold'>{d.head}</h4>
                                         <p className='truncate-3'>{d.para}</p>
                                     </div>
                                 </div>
                             </div>
                        ))}
                     </Slider>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  )
}


const data = [
    {
        img: Blog1,
        head: 'canada',
        para: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opp',
    },
    {
        img:Blog2,
        head:'kashmir',
        para: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opp',

    },
    {
        img:Blog3,
        head:'delhi',
        para: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opp',

    },
];

export default Blogslider;
