import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../../src/assets/img/img/kashmir.jpg";
import Banner2 from "../../src/assets/img/img/kashmir 1.jpg";
import Banner3 from "../../src/assets/img/img/delhi.jpg";
import Banner4 from "../../src/assets/img/kerala/2.jpg";
import '../assets/css/banner.css';

function Banner() {
  const settings = {
    infinite: true,
    speed: 1500,
    autoplay: true,
    slidesToShow: 1,
    arrows: true,
    dot:false,
    slidesToScroll: 1,
  };

  return (
    <div>
      <section className="banner pt-0">
        <div className="m-auto overflow-hidden rounded-20">
          <div className="banner-cover">
            <Slider {...settings}>
              {data.map((d, index) => (
                <div key={index} className="banner-slide" data-aos="fade-down" data-aos-offset="10">
                  <div className="banner-content" >
                    <h1 className="trancate-5">{d.mainhead}</h1>
                    <button className="btn-1 btn-contact">{d.name}</button>
                  </div>
                  <img src={d.img} alt={d.name} className="banner-img" />

                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}

const data = [
  {
    name:'Book Now',
    img: Banner1,
    mainhead:
      "Best & Amazing Adventure in The World.",
  },
  {
    name:'Book Now',
    img: Banner2,
    mainhead:
      "Best & Amazing Adventure in The World.",
  },
  {
    name:'Book Now',
    img: Banner3,
    mainhead:
      "Best & Amazing Adventure in The World.",
  },
  {
    name:'Book Now',
    img: Banner4,
    mainhead:
      "Best & Amazing Adventure in The World.",
  },
];

export default Banner;
