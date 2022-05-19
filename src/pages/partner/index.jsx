import React from "react";
import { ImAndroid, ImAmazon } from 'react-icons/im'
import { BsMicrosoft, BsGoogle,BsApple } from 'react-icons/bs';
import { SiDell, 
  SiLenovo,
  SiToshiba,
  SiCisco,
  SiSamsung,
  SiAdobecreativecloud,
  SiEpson,
  SiPlaystation,
  SiAsus,
  SiMailchimp
} from 'react-icons/si';
import "./style.scss";
import 'animate.css';

const partners = [
  {
    id: 1,
    url: <BsApple size={90} className="icon"/>,
  },
  {
    id: 2,
    url: <ImAndroid size={90} className="icon" />,
  },
  {
    id: 3,
    url: <BsMicrosoft size={90} className="icon" />,
  },
  {
    id: 4,
    url: <BsGoogle size={90} className="icon" />,
  },
  {
    id: 5,
    url: <SiToshiba size={90} className="icon" />,
  },
  {
    id: 6,
    url: <SiCisco size={90} className="icon" />,
  },
  {
    id: 7,
    url: <SiDell size={90} className="icon" />,
  },
  {
    id: 8,
    url: <SiLenovo size={90} className="icon" />,
  },
  {
    id: 9,
    url: <SiSamsung size={90} className="icon" />,
  },
  {
    id: 10,
    url: <SiEpson size={90} className="icon" />,
  },
  {
    id: 11,
    url: <SiAsus size={90}  className="icon" />,
  },
  {
    id: 12,
    url: <SiPlaystation size={90} className="icon" />,
  },
  {
    id: 13,
    url: <ImAmazon size={90} className="icon" />,
  },
  {
    id: 14,
    url: <SiAdobecreativecloud size={90} className="icon" />,
  },
  {
    id: 15,
    url: <SiMailchimp size={90} className="icon" />,
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
                  <span className="animate__animated animate__bounce">{url}</span>
                </div>
            )
        })}
      </div>
    </section>
  );
};

export default Partner;
