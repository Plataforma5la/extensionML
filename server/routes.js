const express = require('express');
const router = express.Router();
const axios = require('axios');
const passport = require('passport')
var MercadoLibreStrategy = require('passport-mercadolibre').Strategy;

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
    clientID: '6429131972786101',
    clientSecret: 'iFuKIyLLhpbg99KyrsPCUqVSleiHYhcf',
    callbackURL: 'http://localhost:3001/back/auth/mercadolibre/callback',
  },
  function (accessToken, refreshToken, profile, done) {
      token = accessToken;
    // + store/retrieve user from database, together with access token and refresh token
    return done(null, profile); 
  }
));

router.get('/auth/mercadolibre', passport.authorize('mercadolibre'));

router.get('/auth/mercadolibre/callback', passport.authorize('mercadolibre'), function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://www.mercadolibre.com.ar');
});

router.get('/auth/ml/access', (req, res) => {
    if (token) {
        res.json(token)
    } else {
        res.send('unauthorized')
    }
    
})

router.get('/products/card/:category', (req, res) => {
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?category=${req.params.category}&limit=1&price=549-650`)
        .then(data => res.json(data.data))
})

router.get('/singleproducts', (req, res) => {
    axios.get(`https://api.mercadolibre.com/sites/MLM/search?category=MLM1051&limit=3`)
        .then(data => res.json(data.data))
})

router.get('/product/:id', (req, res) => {
    axios.get(`https://api.mercadolibre.com/items/${req.params.id}`)
        .then(data => res.json(data.data))
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
})

router.delete('/bookmarks/:id/:token', (req, res) => {
    axios.delete(`https://api.mercadolibre.com/users/me/bookmarks/${req.params.id}?access_token=${req.params.token}`)
        .then(data => res.json(data.data))
})
