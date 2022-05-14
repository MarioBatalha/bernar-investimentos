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
          <p>Estrada direita de Cacuaco</p>
          <p>Junto a pedonal do colégio Sacrinor</p>
          <p>angojordan.energia@gmail.com</p>
          <p>+244 937 588 458</p>
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