//Se implementa mongoose para modelas la db
const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        apellido: {
            type: String,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },

    }, {
        timestamps: true
});

//Se hace la declaracion del modelo
module.exports = model('User',userSchema);