const express = require('express');
var cors = require('cors');
const connection = require('./connection');
const userRoute = require('./routes/user');
const categoryRoute = require('./routes/category');
const productRoute = require('./routes/product');
const billRoute = require('./routes/bill');
const dashboardRoute = require('./routes/dashboard');
const app = express();

const path = require('path');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/user', userRoute);
app.use('/category', categoryRoute);
app.use('/product', productRoute);
app.use('/bill', billRoute);
app.use('/dashboard', dashboardRoute);

app.use('/', express.static(path.join(__dirname, process.env["base-dir"] ? process.env["base-dir"] : "./dist")));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'))
})

module.exports = app;