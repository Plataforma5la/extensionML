const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../build')));

app.use('/back', routes);



app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).send(err);
});

app.listen(3001, () => console.log('listening on port 3001'));