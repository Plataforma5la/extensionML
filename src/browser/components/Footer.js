import React from 'react';
import './footer.css';
import Config from '../../config.js'

export default () => (

    <div className={"Footer"}>
        <div className={"listado"} >
            <div className={"linksTodos"} >

                <a href={Config.urlMiCuenta} target={"_blank"} >Mi Cuenta </a>
                <a href={Config.urlTusCompras} target={"_blank"} > Tus Compras </a>
                <a href={Config.urlTuHistorial} target={"_blank"} > Tu Historial </a>
                <a href={Config.linkOfertasSemana} target={"_blank"} > Ofertas de la Semana </a>
                <a href={Config.urlFavoritos} target={"_blank"} > Favoritos </a>
                <a href={Config.urlTiendasOficiales} target={"_blank"} > Tiendas Oficiales </a>
                <a href={Config.urlCategorias} target={"_blank"} > Categorías </a>
                <a href={Config.urlMercadoPuntos} target={"_blank"} > Mercado Puntos </a>
                <a href={Config.urlAyuda} target={"_blank"} > Ayuda</a>
                <a href={Config.urlVender} target={"_blank"} > Vender</a>

            </div>

        </div>
        <div className={'border'}>
            <span className={'copy'}> {Config.copyright}
</span>
        </div>
    </div>

)