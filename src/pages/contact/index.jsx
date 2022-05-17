import React from "react";
import { GoMail, GoLocation } from "react-icons/go";
import { BsWhatsapp } from 'react-icons/bs';

import "./style.scss";

const Contact = () => {
  return (
    <section className="contact">
      <h1> COntactos</h1>
      <div className="contact-description">
        <div className="localization">
          <h3>Localização</h3>
          <p>Luanda, Bairro Rangel</p>
          <p>Rua Arco-íris Zona 15, casa S/N</p>
          <p>hello@bernarinvestimentos.com</p>
          <GoLocation size={40} color="#23395D"></GoLocation>
        </div>
        <div className="localization">
          <h3>WhatsApp</h3>
          <p>+244 953 166 250</p>
          <p>+244 931 1674 763</p>
          <p>+244 931 000 000</p>
          <BsWhatsapp size={40} color="#23395D"></BsWhatsapp>
        </div>
        <div className="contact-form">
          <h3>Envei-nos um email</h3>
          <p>
            Esteja por dentro de todos os serviços que fornecemos e esteja
            atento para as nossas promoções, envie-nos um email para que não
            recebas as nossas promoções como spam.
          </p>

          <a href="mailto: mcbattle98@gmail.com">
            <GoMail size={40} color="#23395D"></GoMail>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
