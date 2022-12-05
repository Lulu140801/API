const express = require('express');
const Marques = require('./routers/Marques');
const Modeles = require('./routers/Modeles');
const app = express();

app.use(express.json());
app.use('/Marques', Marques);
app.use('/Modeles', Modeles);

module.exports = app;