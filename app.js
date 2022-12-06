const express = require('express');
const {Cars} = require("./models/index")
const Marques = require('./routers/Marques');
const Choix = require('./routers/Choix');
const Modeles = require('./routers/Modeles');
const app = express();

app.use(express.json());
app.use('/Marques', Marques);
app.use('/', Choix);
app.use('/Modeles', Modeles);

module.exports = app;