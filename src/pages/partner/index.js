import React from "react";

import "./style.scss";

const partners = [
  {
    id: 1,
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/146px-Apple_logo_black.svg.png",
  },
  {
    id: 2,
    url: "https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1200px-HP_logo_2012.svg.png",
  },
  {
    id: 3,
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/1200px-Dell_logo_2016.svg.png",
  },
  {
    id: 4,
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/2560px-Lenovo_logo_2015.svg.png",
  },
  {
    id: 5,
    url: "https://download.logo.wine/logo/Hikvision/Hikvision-Logo.wine.png",
  },
  {
    id: 6,
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Toshiba_logo.svg/2560px-Toshiba_logo.svg.png",
  },
  {
    id: 7,
    url: "https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo.png",
  },
  {
    id: 8,
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/2560px-Cisco_logo_blue_2016.svg.png",
  },
  {
    id: 9,
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/2560px-LG_logo_%282015%29.svg.png",
  },
  {
    id: 10,
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/2048px-Xiaomi_logo_%282021-%29.svg.png",
  },
];

const Partner = () => {
  return (
    <section className="partner">
      <h1>Parceiros</h1>
      <div className="partner-container">
        {partners.map(item => {
            const { id, url } = item;
            return (
                <div className="partner-description" key={id} >
                  <img src={url} alt="" />
                </div>
            )
        })}
      </div>
    </section>
  );
};

export default Partner;
