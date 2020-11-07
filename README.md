*---- Descripcion ---*

El proyecto consiste en un simple sistema que consta de dos servidores (BackEnd y FrontEnd) que manejan usuarios. 
Lo que se quiere demostrar es que el programa se conecta a una base de datos (En este caso es simulada por un contenedor), 
registra datos y los muestra. Todo esto con el fin de manejar Rutas en NodeJs y en React.

El programa se divide en dos modulos generales. Un modulo dedicado para el BackEnd y el otro modulo para el Front


NOTA: El programa cuenta con una interfaz muy basica. Lo que se quiere es demostrar el simple funcionamiento
	  del sistema. Consta de tres pantallas. "HOME", "Cargar Usuario" y "Lista de Usuario"

	  *Cargar Usuario* contiene un formulario, en donde se quiere registrar el nombre, apellido y email de una persona.
	  *Lista de Usuario* muestra la lista de registros cargados en base de datos.

*---- Instrucciones ---*

1.- Descomprimir el archivo en cualquier directorio del equipo.

2.- Abrir cmd y ubicarse en el directorio del proyecto para ejecutar servidor Back End, 
    Por ejemplo si lo ubica en "C:" sería: C:\test_angel_carrera\backend
	
3.- Ejecutar comando "npm start" para iniciar el servidor Node (BackEnd). 
	Debe mostrar mensaje: Server activo en Puerto 4000
                           Conexion a db activa

4.- Abrir otro cmd y ubicarse en el directorio del proyecto para ejecutar servidor FrontEnd, 
    Por ejemplo si lo ubica en "C:" sería: C:\test_angel_carrera\frontend
	
3.- Ejecutar comando "npm start" para iniciar el servidor (FrontEnd). 
	Debe mostrar mensaje: You can now view test_angel_carrera in the browser.

  							Local:            http://localhost:3000
  							On Your Network:  http://192.168.1.95:3000

							Note that the development build is not optimized.
							To create a production build, use npm run build.

5.- Abra http://localhost:3000 para correr el program en el navegador.

*----- Distribucion del Proyecto-----*

BackEnd:

Dentro de la carpeta principal "app" se encuentran las carpetas: 

	*Controllers*  : Carpeta que contiene todas las funciones que se ejecutan en el sistema, 
	                 en el fondo es guardar un usuario y hacer un select al contenedor
	
	*Models*       : Es donde esta declarado el archivo que sirve de modelo para la base de datos (contenedor).
	
	*Routes*       : Son las rutas que maneja el servidor backend, son las rutas que hacen la ejecucion de los controllers
	 app.js        : Archivo principal de la aplicacion
	 index.js      : Archivo de la aplicacion
	 testdb.json   : Contenedor de base de datos


FrontEnd:

Dentro de la carpeta principal "src" se encuentran destacables:
    *Components*   : Carpeta que contiene todo el funcionamiento del frontend
    index.js       : Archivo que maneja las rutas disponibles para el front
    app.js         : Archivo principal del front
