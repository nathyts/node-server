const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({extended: true}));

consign()
.include('./routes')
.then('./config/database.js')
.then('./models')
.into(app);

module.exports = app;
