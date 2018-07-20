import React from 'react';
import './footer.css';
import carrito from '../imagenes/carrito.png'
import bag from '../imagenes/bag.png'
import tag from '../imagenes/tag.png'

var imStyle = {
    maxWidth: '50',
    maxHeight: '50px',
    float: 'left',

};

export default () => (

    <div className={"Footer"}>
        <div className={"InnerFooter"}>
            <h3>Conocé nuestras ofertas!
 </h3>
            <p className={"secondary-title"}>
                Visitanos y descrubrí nuestros productos.
</p>
            <div className={"InnerFooter"} id={'carrito'}>
                <div className={'flex'}>

                    <img style={imStyle} src={carrito} alt='car' />

                    <a href={'https://www.mercadolibre.com/jms/mla/lgz/msl/login/H4sIAAAAAAAEAzWNQQ7CMAwE_-Jz1d5z5COVSbfBIiGRY1RQxd9xkLjZ3tnxSbkmeaz2bqBAeLUsUYwmapltr1pW2Two2U9dDP-VB8LKBQbtFM4hStgu8NJQmT7hTKo-38xaD8tyHMdcoJG3muWqmGMtM-vinCJJdxXGt1_3M9HO3VZTjncKO-eOzxckonKEsAAAAA/user'} target={'_blank'}  >

                        <p className={"links"}> Agregar al carrito</p>
                    </a>
                </div>
                <div className={'flex'}>
                    <img style={imStyle} src={bag} alt='bg' />
                    <a href={'https://www.mercadolibre.com/jms/mla/lgz/msl/login/H4sIAAAAAAAEAzWNQQ7CMAwE_-Jz1d5z5COVSbfBIiGRY1RQxd9xkLjZ3tnxSbkmeaz2bqBAeLUsUYwmapltr1pW2Two2U9dDP-VB8LKBQbtFM4hStgu8NJQmT7hTKo-38xaD8tyHMdcoJG3muWqmGMtM-vinCJJdxXGt1_3M9HO3VZTjncKO-eOzxckonKEsAAAAA/user'} target={'_blank'} >
                        <p className={"links"}> Mis órdenes</p>
                    </a>
                </div>
                <div className={'flex'}>
                    <img style={imStyle} src={tag} alt='tag' />
                    <a href={'https://www.mercadolibre.com.ar/'} target={'_blank'}>
                        <p className={"links"}> Más ofertas</p>
                    </a>
                </div>
            </div>
        </div>
    </div>

)