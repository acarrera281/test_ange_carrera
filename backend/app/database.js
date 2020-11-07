/*----NOTA: Este archivo es llamado directamente desde index----*/

const mongoose = require('mongoose');

//Se establece la ruta para la conexion a la db
const URI = 'mongodb://localhost/angelcarreratest';

//Se establece una cadena para la conexion a la db
mongoose.connect(URI,{
	useNewUrlParser: true,
	useCreateIndex:  true
});

//Verificar conexion 
const connection = mongoose.connection;

//Mensaje Success cuando se estrablezca a conexion
connection.once('open',() => {
	console.log('Conexion a db activa');
});