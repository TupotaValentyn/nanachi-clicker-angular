const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();

const options = {
  target: 'http://localhost:4200',
};

const appProxy = proxy(options);

app.use(appProxy);

app.listen(3000);
