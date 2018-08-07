const config = {
    clientId: '6429131972786101', //client ID app Argentina para estrategia passport/routes.js
    clientSecret: 'iFuKIyLLhpbg99KyrsPCUqVSleiHYhcf', //client secret app Argentina para estrategia passport/routes.js
    urlRedirect: 'http://www.mercadolibre.com.ar', //URL redirect para el callback de Oauth Passport/routes.js
    site: 'MLA', //site para rutas backend/routes.js
    cat1CardDeals: 'MLA1051', //Categoría celulares y telefonía para primer producto CardDeals./routes.js
    cat2CardDeals: 'MLA3502', //Categoría accesorios para celulares para segundo producto CardDeals./routes.js
    cat3CardDeals: 'MLA1574', //Categoría Hogar, Muebles y Jardín para tercer producto CardDeals./routes.js
    priceRange: '549-650' //Rango de precios para los productos de CardDeals/routes.js
}

module.exports = config;