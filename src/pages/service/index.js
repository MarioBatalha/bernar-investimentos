import React from 'react';

import './style.scss';
import Saller from '../../assets/img/saller.svg';
import Maintenance from '../../assets/img/maintanance.svg';

const Service = () => {
    return (
        <section className="service">
            <h1>Nossos serviços</h1>
            <div className="service-container">
            <div className="ship">
                <img src={Saller} alt="imagem de vendedor"/>
                <h2>Venda</h2>
                <p>Vendemos todo tipo de material de escritório e materias informáticos.</p>
            </div>
            <div className="maintenance">
                <img src={Maintenance} alt="imagem de manutenção" />
                <h2>Manuntenção e reparação</h2>
                <p>Manunteção e reparação de todo tipo de dispositivo electrónico, desde computadores, impressoras e telemóveis</p>
            </div>
            </div>
        </section>
    )
}

export default Service;