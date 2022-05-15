import React from "react";
import "./style.scss";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="localization">
          <h3>Localização</h3>
          <p>Luanda, Bairro Rangel</p>
          <p>Rua ARco-íris ZOna 15, casa S/N</p>
          <p>hello@bernarinvestimentos.com</p>
          <p>+244 953 166 250 - 931 1674 763</p>
        </div>
      </div>
      <div className="copyright">
        <p className="copyright">
          Copyright &copy; {year} <a href="http://mariobatalha.co/" target="blank" > Mário Batalha</a> - All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;