const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products.router');
const userRoutes = require('./routes/user.router');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/product', productRoutes);
app.use('/api/user', userRoutes);

module.exports = app;