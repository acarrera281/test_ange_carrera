//Declaracion del servidor
var express = require('express');

//cors permite la comunicacion entre dos servidores
const cors = require('cors');

var app = express();

//Configuracion del servidor
app.set('port', 4000);

//midlewares
app.use(cors());                //envia informacion en json
app.use(express.json());

//rutas
app.use('/testapi/users', require('./routes/users'));
app.use('/testapi/list',  require('./routes/list'));


module.exports = app;