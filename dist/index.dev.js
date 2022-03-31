"use strict";

var express = require('express');

var cors = require('cors');

var routerApi = require('./routes');

var _require = require('./middlewares/error.handler'),
    errorHandler = _require.errorHandler,
    logErrors = _require.logErrors,
    boomErrorHandler = _require.boomErrorHandler;

var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
app.get('/', function (req, res) {
  res.send('hola mi server en express');
});
routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
app.listen(port, function () {
  console.log('Mi puerto ' + port);
});