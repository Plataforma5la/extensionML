const config = {
    clientId: '6429131972786101', //client ID app Argentina para estrategia passport/routes.js
    clientSecret: 'iFuKIyLLhpbg99KyrsPCUqVSleiHYhcf', //client secret app Argentina para estrategia passport/routes.js
    urlRedirect: 'http://www.mercadolibre.com.ar', //URL redirect para el callback de Oauth Passport/routes.js
    site: 'MLA', //site para rutas backend/routes.js
    cat1CardDeals: 'MLA1051', //Categoría celulares y telefonía para primer producto CardDeals./routes.js
    cat2CardDeals: 'MLA3502', //Categoría accesorios para celulares para segundo producto CardDeals./routes.js
    cat3CardDeals: 'MLA1574', //Categoría Hogar, Muebles y Jardín para tercer producto CardDeals./routes.js
    priceRangeCardDeals: '549-650', //Rango de precios para los productos de CardDeals/routes.js
    cat1SingleCard: 'MLA1246', //Categoría Belleza y Cuidado Personal para primer producto Single Card./routes.js
    cat2SingleCard: 'MLA1403', //Categoría Alimentos y Bebidas para segundo producto Single Card./routes.js
    cat3SingleCard: 'MLA1144', //Categoría Consolas y Videojuegos para tercer producto Single Card./routes.js
    priceRangeSingleCards: '549-650' //Rango de precios para los productos de Single Card/routes.js
}

module.exports = config;