import React from 'react';
import './header.css';
import logo from '../imagenes/mercado-libre-logo.png'

const HeaderTop = () => (
    <div className={"headerTop"}>
        <div className={"logo"}>
            <a href="https://mercadolibre.com.mx" target={"_blank"}><img id="logoMeli" src={logo} alt="meli"/></a>
        </div>
    </div>
)

export default HeaderTop;