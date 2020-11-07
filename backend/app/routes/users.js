const {Router} = require('express');
const router = Router();

//Se hace referencia a la funcion que quiero usar del controller
const {createUsers} = require('../controllers/users.controller');

//Ruta para cargar user
router.route('/')
    .post(createUsers)

    
module.exports = router;