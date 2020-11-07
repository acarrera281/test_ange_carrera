const userCtrl = {};
const express = require('express');

const { v4: uuidv4 } = require('uuid');                 //Libreria que genera id por cada registro guardado en Json
const fs = require('fs');                               //Manejo de archivos


//SE hace referencia al archivo model y se guarda en una constante
const User = require('../models/list'); 

//SE declara una constante que se encargue de leer el archivo contenedor
const json_users = fs.readFileSync('app/testdb.json', 'utf-8');

//Parsea el contenido del json
let users = JSON.parse(json_users);

//Controlador guarda el usuario
userCtrl.createUsers = async (req, res) => {

    const { nombre, apellido, email } = req.body;
  
    if (!nombre || !apellido || !email) {
      res.status(400).send("Hubo un error en la carga de datos");
      return;
    }
  
    var nuevoUsuario = {
      id: uuidv4(),
      nombre,
      apellido,
      email
    };
  
    // Se añade un nuevo usuario al Json
    users.push(nuevoUsuario);
  
    // saving the array in a file
    const json_users = JSON.stringify(users);
    fs.writeFileSync('app/testdb.json', json_users, 'utf-8');
  
    res.redirect('/');
};


module.exports = userCtrl;