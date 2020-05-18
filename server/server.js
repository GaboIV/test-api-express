var express = require('express');
var apiRouter = require('./routes');
var cors = require('cors')
var app = express();

app.use(cors())

app.use('/api', apiRouter);

app.listen(3000, function () {
  console.log('Aplicación MyApp siendo oída en el puerto 3000');
});