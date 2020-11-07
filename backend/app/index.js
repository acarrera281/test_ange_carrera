/*----------------------------Archivo PRINCIPAL POR PARTE DEL BackEnd-------------------------------*/

//Inicia el servidor
const app = require('./app');

//Llama al archivo database para conectar a db e iniciarla
require('./database');

//Funcion Principal 
async function main(){
	await app.listen(app.get('port'));
	console.log('Server activo en Puerto', app.get('port'));
}

//Llamado de ejecucion de la funcion
main();
