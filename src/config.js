
const config = {
    clientId: '6429131972786101', //client ID app Argentina para estrategia passport/routes.js
    clientSecret: 'iFuKIyLLhpbg99KyrsPCUqVSleiHYhcf', //client secret app Argentina para estrategia passport/routes.js
    urlRedirect: 'http://www.mercadolibre.com.ar', //URL redirect para el callback de Oauth Passport y url para link del header/routes.js y HeaderInput.js
    site: 'MLA', //site para rutas backend/routes.js
    cat1CardDeals: 'MLA1055', //Categoría celulares y telefonía para primer producto CardDeals./routes.js
    cat2CardDeals: 'MLA3502', //Categoría accesorios para celulares para segundo producto CardDeals./routes.js
    cat3CardDeals: 'MLA1574', //Categoría Hogar, Muebles y Jardín para tercer producto CardDeals./routes.js
    priceRangeCardDealsCat1: '0-5999', //Rango de precios para los productos de CardDeals/routes.js
    priceRangeCardDealsCat2: '1200-1250', //Rango de precios para los productos de CardDeals/routes.js
    priceRangeCardDealsCat3: '0-600', //Rango de precios para los productos de CardDeals/routes.js
    queryCardDealsCat1: 'celular,nuevo,android', //Query para primer categoría CardDeals (poner más palabras separadas por comas)/routes.js
    queryCardDealsCat2: 'auriculares,bluetooth', //Query para segunda categoría CardDeals (poner más palabras separadas por comas)/routes.js
    queryCardDealsCat3: 'cocina,sarten', //Query para tercer categoría CardDeals (poner más palabras separadas por comas)/routes.js
    shippingCostCardDealsCat1: 'free', //Envío gratis para primer categoría de CardDeals/routes.js
    cat1SingleCard: 'MLA1246', //Categoría Belleza y Cuidado Personal para primer producto Single Card./routes.js
    cat2SingleCard: 'MLA1403', //Categoría Alimentos y Bebidas para segundo producto Single Card./routes.js
    qSingleCard2: 'packcerveza', //query para traer pack de cerveza de Alimentos y Bebidas Single Card./routes.js
    discountSingleCard1: '30-100',//query para traer productos con un rango de descuentos de Electrónica, Audio y Video Single Card./routes.js
    //---------------------------------------------------------------------------------------------------------------------
    bannerUrl: 'https://ofertas.mercadolibre.com.ar/especial-juguetes#DEAL_ID=mla813&S=homedesktop&V=3&L=especialjuguetes&c_id=/home/exhibitors-carousel/element&c_campaign=especial-juguetes&c_element_order=3', //url link del componente banner/ cardBanner.js
    //---------------------------------------------------------------------------------------------------------------------
    linkOfertasSemana: 'https://ofertas.mercadolibre.com.ar/ofertas-de-la-semana', //url botón "Ver todas las ofertas" en cardDeals y "Ofertas de la Semana" de Footer/cardDeals.js y Footer.js
    //---------------------------------------------------------------------------------------------------------------------
    urlMiCuenta: 'https://myaccount.mercadolibre.com.ar', //url mi cuenta para footer/Footer.js
    urlTusCompras: 'https://myaccount.mercadolibre.com.ar/purchases/list/', //url tus compras para footer/Footer.js
    urlTuHistorial: 'https://www.mercadolibre.com.ar/gz/home/navigation', //url tu historial para footer/Footer.js
    urlFavoritos: 'https://myaccount.mercadolibre.com.ar/bookmarks/list', //url favoritos para footer/Footer.js
    urlTiendasOficiales: 'https://www.mercadolibre.com.ar/tiendas-oficiales', //url tiendas oficiales para footer/Footer.js
    urlCategorias: 'https://home.mercadolibre.com.ar/categories', //url categorías para footer/Footer.js
    urlMercadoPuntos: 'https://www.mercadolibre.com.ar/mercadopuntos', //url mercado puntos para footer/Footer.js
    urlAyuda: 'https://www.mercadolibre.com.ar/ayuda', //url ayuda para footer/Footer.js
    urlVender: 'https://vender.mercadolibre.com.ar',//url vender para footer/Footer.js
    copyright: 'Copyright © 1999-2018 MercadoLibre S.R.L.' //copyright para footer/Footer.js

}

module.exports = config