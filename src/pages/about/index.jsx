import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Slide1 = require("../../assets/img/03.png");
const Slide2 = require("../../assets/img/04.png");
const Slide3 = require("../../assets/img/05.png");

const images = [
  {
    id: 1,
    url: Slide1,
    alternativeText: "Computadores Lotus"
  },
  {
    id: 2,
    url: Slide2,
    alternativeText: "Pacote Microsoft Office"
  },
  {
    id: 1,
    url: Slide3,
    alternativeText: "Computadores"
  }

]

const About = () => {
  return (
    <section className="about">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       {
         images.map(item => {
           return(
             <SwiperSlide key={item.id}>
               <img className="imgSlider" src={item.url} alt={item.alternativeText} />
             </SwiperSlide>
           )
         })
       }
      </Swiper>
    </section>
  );
}
export default About;