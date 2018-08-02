const express = require('express');
const router = express.Router();
const axios = require('axios');

module.exports = router;

const allowCrossDomain = (req, res, next) => {
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Accept, Header, Content-Type, access-control-allow-origin",
        'Content-Type' : 'application/json; charset=UTF-8',
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

router.get('/products', (req, res) => {
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?category=MLA1430&limit=5&price=549-650`)
    .then(data => res.json(data.data))
})

router.get('/products/:token', (req, res) => {
    axios.get(`https://api.mercadolibre.com/users/me/bookmarks?access_token=${req.params.token}`)
    .then(data => res.json(data.data))
})

router.post('/bookmarks/:id/:token', (req, res) => {
    axios({
        method: 'POST',
        url: `https://api.mercadolibre.com/users/me/bookmarks?access_token=${req.params.token}`,
        data: JSON.stringify({"item_id": req.params.id})
    })
    .then(data => res.json(data.data))
})

router.delete('/bookmarks/:id/:token', (req, res) => {
    axios.delete(`https://api.mercadolibre.com/users/me/bookmarks/${req.params.id}?access_token=${req.params.token}`)
    .then(data => res.json(data.data))
})