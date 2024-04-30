import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Favas from "../../src/assets/img/img/kashmir.jpg";
import Fayis from "../../src/assets/img/img/kashmir 1.jpg";
import Nithin from "../../src/assets/img/img/delhi.jpg";
import '../assets/css/banner.css';

function Banner() {
  const settings = {
    infinite: true,
    speed: 1500,
    autoplay: false,
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
    name: "Favas",
    img: Favas,
    mainhead:
      "Best & Amazing Adventure in The World.",
    possion: "CEO",
  },
  {
    name: "fayis",
    img: Fayis,
    mainhead:
      "Best & Amazing Adventure in The World.",
    possion: "CMO",
  },
  {
    name: "Nithin",
    img: Nithin,
    mainhead:
      "Best & Amazing Adventure in The World.",
    possion: "MANAGER",
  },
];

export default Banner;
