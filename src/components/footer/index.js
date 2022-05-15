import React from "react";
import "./style.scss";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
  return (
    <footer>
      <div className="container">
        
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