import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import { Carousel } from "react-responsive-carousel";
import FadeIn from 'react-fade-in';

import "./style.scss";

const About = () => {
  return (
    <section className="about">
      <FadeIn>
        <div className="about-description overlay">
          <h3>Matérial de escritório</h3>
          <p>
            Venda de matérial de escritório sobre medida e a todo os gostos.{" "}
            <br />
            Fazemos manuntenção e reparação de dispositivos electrónicos desde
            impressoras, computares e outros.
          </p>
        </div>
      </FadeIn>
     {/*   <Carousel autoPlay={true} interval={1} >
                <div className="about-container">
                    <img src="https://blog.playstation.com/tachyon/2022/03/c84543febf90ea4338785128ccd9fc878a550291-scaled.jpg?resize=1088%2C612&crop_strategy=smart" />
                    <p className="legend">Material de escritório</p>
                </div>
                <div>
                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/1a/dd/6a/f0/paradise-taveuni.jpg" />
                    <p className="legend">Ciber-segurança</p>
                </div>
                <div>
                    <img src="https://i0.wp.com/www.gsalam.net/wp-content/uploads/2014/02/Paradise-GSalam.Net_.jpg?fit=1920%2C1080&ssl=1" />
                    <p className="legend">Manuntenção</p>
                </div>
            </Carousel> */}
    </section>
  );
};

export default About;
