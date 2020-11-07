const {Router} = require('express');
const router = Router();

//Se hace referencia a las funciones que quiero usar de los controller
const {getList, deleteUser} = require('../controllers/list.controller');

//Ruta que muestra lista de usuarios
router.route('/')
    .get(getList)

//Ruta para eliminar user
router.route('/:id')
    .delete(deleteUser)

    
module.exports = router;