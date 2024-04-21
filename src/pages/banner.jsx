import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Favas from "../../src/assets/img/Favas.jpg";
import Fayis from "../../src/assets/img/fayis.jpg";
import Nithin from "../../src/assets/img/nithin.jpg";
import '../assets/css/banner.css';

function Banner() {
  const settings = {
    infinite: true,
    speed: 1500,
    autoplay: true,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
  };

  return (
    <div>
      <section className="banner pt-0">
        <div className="m-auto overflow-hidden rounded-20">
          <div className="banner-cover">
            <Slider {...settings}>
              {data.map((d, index) => (
                <div key={index} className="banner-slide">
                  <div className="banner-content">
                    <h4 className="text-xl-semibold">{d.name}</h4>
                    <h5 className="text-xl-semibold">{d.possion}</h5>
                    <p className="trancate-5">{d.review}</p>
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
    review:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s...",
    possion: "CEO",
  },
  {
    name: "fayis",
    img: Fayis,
    review:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s...",
    possion: "CMO",
  },
  {
    name: "Nithin",
    img: Nithin,
    review:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s...",
    possion: "MANAGER",
  },
];

export default Banner;
