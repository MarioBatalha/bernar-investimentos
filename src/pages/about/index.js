import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
//import FadeIn from 'react-fade-in';
import slider3 from '../../assets/img/03.png';
import slider4 from '../../assets/img/04.png';
import slider5 from '../../assets/img/05.png';

import "./style.scss";

const About = () => {
  return (
    <section className="about">
      {/* <FadeIn>
        <div className="about-description overlay">
          <h3>Matérial de escritório</h3>
          <p>
            Venda de matérial de escritório sobre medida e a todo os gostos.{" "}
            <br />
            Fazemos manuntenção e reparação de dispositivos electrónicos desde
            impressoras, computares e outros.
          </p>
        </div>
      </FadeIn> */}
       <Carousel autoPlay={true} interval={1} loop >
                <div className="about-container">
                    <img src={slider3} alt="" />
                    <p className="legend">Material de escritório</p>
                </div>
                <div>
                    <img src={slider4} alt="" />
                    <p className="legend">Ciber-segurança</p>
                </div>
                <div>
                    <img src={slider5}  alt=""/>
                    <p className="legend">Manuntenção</p>
                </div>
            </Carousel>
    </section>
  );
};

export default About;
