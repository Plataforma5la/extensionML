const express = require('express');
const router = express.Router();
const axios = require('axios');
const passport = require('passport')
var MercadoLibreStrategy = require('passport-mercadolibre').Strategy;
const Config = require('../config.js')

module.exports = router;

var token = null;

const allowCrossDomain = (req, res, next) => {
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.set({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Accept, Header, Content-Type, access-control-allow-origin",
            'Content-Type': 'application/json; charset=UTF-8',
        });
        return res.sendStatus(200);
    }
    res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
            "GET, POST, OPTIONS, PUT, PATCH, DELETE",
        "Access-Control-Allow-Headers":
            "header, Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,Keep-Alive,X-Requested-With,If-Modified-Since",
        "Access-Control-Allow-Credentials": true
    });
    next();
};


router.use(allowCrossDomain);

passport.use(new MercadoLibreStrategy({
    clientID: Config.clientId,
    clientSecret: Config.clientSecret,
    callbackURL: 'http://localhost:3001/back/auth/mercadolibre/callback',
},
    function (accessToken, refreshToken, profile, done) {
        token = accessToken;
        // + store/retrieve user from database, together with access token and refresh token
        return done(null, profile);
    }
));

router.get('/auth/mercadolibre', passport.authorize('mercadolibre'));

router.get('/auth/mercadolibre/callback', passport.authorize('mercadolibre'), function (req, res) {
    // Successful authentication, redirect home.
    res.redirect(Config.urlRedirect);
});

router.get('/auth/ml/access', (req, res) => {
    if (token) {
        res.json(token)
    } else {
        res.send('unauthorized')
    }

})

router.get('/products/card/deals', (req, res) => {
    Promise.all([axios.get(`https://api.mercadolibre.com/sites/${Config.site}/search?category=${Config.cat1CardDeals}&limit=1&price=${Config.priceRange}`), axios.get(`https://api.mercadolibre.com/sites/${Config.site}/search?category=${Config.cat2CardDeals}&limit=1&price=${Config.priceRange}`), axios.get(`https://api.mercadolibre.com/sites/${Config.site}/search?category=${Config.cat3CardDeals}&limit=1&price=${Config.priceRange}`)])
        .then(result => {
            var resultado = [];
            result.forEach(element => {
                resultado.push(element.data.results[0])
            });
            return resultado
        })
        .then(resultado => res.json(resultado))
        .catch(e => {
            console.log(e);
        })
})
router.get('/singleproducts', (req, res) => {
    Promise.all([axios.get(`https://api.mercadolibre.com/sites/MLA/search?category=MLA1246&limit=1&price=549-650`), axios.get(`https://api.mercadolibre.com/sites/MLA/search?category=MLA1403&q=cerveza&limit=1`), axios.get(`https://api.mercadolibre.com/sites/MLA/search?category=MLA1144&limit=1&price=549-650
    `)])
        .then(result => {
            var resultado = [];
            result.forEach(element => {
                resultado.push(element.data.results[0])
            });
            return resultado
        })
        .then(resultado => res.json(resultado))
        .catch(e => {
            console.log(e);
        })

})

router.get('/product/:id', (req, res) => {
    axios.get(`https://api.mercadolibre.com/items/${req.params.id}`)
        .then(data => res.json(data.data))
        .catch(err => console.log(err.message))
})

router.get('/products/:token', (req, res) => {
    axios.get(`https://api.mercadolibre.com/users/me/bookmarks?access_token=${req.params.token}`)
        .then(data => res.json(data.data))
        .catch(err => console.log(err.message))
})

router.post('/bookmarks/:id/:token', (req, res) => {
    axios({
        method: 'POST',
        url: `https://api.mercadolibre.com/users/me/bookmarks?access_token=${req.params.token}`,
        data: JSON.stringify({ "item_id": req.params.id })
    })
        .then(data => res.json(data.data))
        .catch(err => console.log(err.message))
})

router.delete('/bookmarks/:id/:token', (req, res) => {
    axios.delete(`https://api.mercadolibre.com/users/me/bookmarks/${req.params.id}?access_token=${req.params.token}`)
        .then(data => res.json(data.data))
        .catch(err => console.log(err.message))
})
