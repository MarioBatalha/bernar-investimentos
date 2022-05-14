import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import FadeIn from "react-fade-in";

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
    </section>
  );
};

export default About;
