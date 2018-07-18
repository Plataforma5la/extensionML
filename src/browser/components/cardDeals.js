import React from 'react';
import './cardDeals.css';



const Items = [{
    itemNum: 1,
    nombre: "Producto 1",
    img: "https://4.imimg.com/data4/BB/RH/MY-15241145/multimedia-mobile-phone-500x500.jpg",
    url: "https://4.imimg.com/data4/BB/RH/MY-15241145/multimedia-mobile-phone-500x500.jpg",
    descripcion: "descripción de prueba 1",
    precio: 100,
    precioAnt: 150
},{
    itemNum: 2,
    nombre: "Producto 2",
    img: "https://static1.squarespace.com/static/543d97dce4b095fba39af8a1/54da2c13e4b0c3a7f3a731d6/5643b468e4b042aca2bcdd6d/1447277677751/BikeMensCrop.jpg?format=500w",
    url: "https://static1.squarespace.com/static/543d97dce4b095fba39af8a1/54da2c13e4b0c3a7f3a731d6/5643b468e4b042aca2bcdd6d/1447277677751/BikeMensCrop.jpg?format=500w",
    descripcion: "descripción de prueba 2",
    precio: 80,
},{
    itemNum: 3,
    nombre: "Producto 3",
    img: "https://cdn.alambique.com/7132-large_default/juego-de-vasos-18-piezas.jpg",
    url: "https://cdn.alambique.com/7132-large_default/juego-de-vasos-18-piezas.jpg",
    descripcion: "descripción de prueba 3",
    precio: 60,
    precioAnt: 190
},{
    itemNum: 4,
    nombre: "Producto 4",
    img: "http://d26lpennugtm8s.cloudfront.net/stores/655/756/products/759754-mla26711088193_012018-o-c3b2d298364162c7c815175098825633-640-0.jpg",
    url: "http://d26lpennugtm8s.cloudfront.net/stores/655/756/products/759754-mla26711088193_012018-o-c3b2d298364162c7c815175098825633-640-0.jpg",
    descripcion: "descripción de prueba 4",
    precio: 40,
    precioAnt: 100
},{
    itemNum: 5,
    nombre: "Producto 5",
    img: "https://www.relojesaviador.es/1910-large_default/reloj-aviador-policia-uip-av-1106.jpg",
    url: "https://www.relojesaviador.es/1910-large_default/reloj-aviador-policia-uip-av-1106.jpg",
    descripcion: "descripción de prueba 5descripción de prueba 5descripción de prueba 5descripción de prueba 5descripción de prueba 5descripción de prueba 5descripción de prueba 5descripción de prueba 5descripción de prueba 5descripción de prueba 5descripción de prueba 5",
    precio: 30,
}]

export default () => (

    <div className={"card"}>
        <div className={"cardContent"}>
            <p className={"cardHeader"}>Deals</p>
            <div className={"cardItemsContainer"}>
                {Items.map(item => {
                return(
                    <div key={item.itemNum} className={"itemCardContainer"}>
                        <div className={"itemCard"}>
                            <a target={"_blank"} href={item.url}><img alt={""} src={item.img} title={item.nombre} className={'itemImg'}/></a>
                        <div className={"itemDetail"}>
                            <div className={"itemPriceRow"}>
                                <p className={"primaryTitle"}>
                                    <span>{"$"+(item.precio).toFixed(2)}</span>
                                    {(item.precioAnt)?<span className={"itemPrecioOld"}>{"$"+(item.precioAnt).toFixed(2)}</span>:null}
                                </p>
                            </div>
                            <div className={"itemTitleRow"}>
                                <a target={"_blank"} href={item.url}><h4 className={"itemTitle"}>{item.nombre}</h4></a>
                            </div>
                            <div className={"itemDescRow"}>
                                <h4 className={"itemDesc"}>{item.descripcion}</h4>
                            </div>
                        </div>
                        </div>
                    </div>  
                )
                })}
            </div>    
        </div>
    </div>

)