import React from "react";
import { GoMail } from "react-icons/go";

import "./style.scss";

const Contact = () => {
  return (
    <section className="contact">
      <h1> COntactos</h1>
      <div className="contact-description">
        <div className="localization">
          <h3>Localização</h3>
          <p>Luanda, Bairro Rangel</p>
          <p>Rua Arco-íris ZOna 15, casa S/N</p>
          <p>hello@bernarinvestimentos.com</p>
          <p>+244 953 166 250 - 931 1674 763</p>
        </div>
        <div className="contact-form">
          <h3>Envei-nos um email</h3>
          <p>
            Esteja por dentro de todos os serviços que fornecemos e esteja
            atento para as nossas promoções, envie-nos um email para que nçao
            recebas as nossas promoções como spam.
          </p>

          <a href="mailto: mcbattle98@gmail.com">
            <GoMail size={40} color="dark-blue"></GoMail>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
