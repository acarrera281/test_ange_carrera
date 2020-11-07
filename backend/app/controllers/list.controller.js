const listCtrl = {};
const express = require('express');
const { v4: uuidv4 } = require('uuid');                 //Libreria que genera id por cada registro guardado en Json
const fs = require('fs');                               //Manejo de archivos

//SE declara una constante que se encargue de leer el archivo contenedor
const json_users = fs.readFileSync('app/testdb.json', 'utf-8');

//Parsea el contenido del json
let users = JSON.parse(json_users);

//SE hace referencia al archivo model y se guarda en una constante
const List = require('../models/list');

listCtrl.getList = async (req, res) =>{
    //res.render({ users });
    res.json(users);
};

listCtrl.deleteUser = async (req, res) => {
    console.log(req.params);
    users = users.filter(User => User.id != req.params.id);
  
    // saving data
    const json_users = JSON.stringify(users);
    fs.writeFileSync('app/testdb.json', json_users, 'utf-8');
  };

module.exports = listCtrl;