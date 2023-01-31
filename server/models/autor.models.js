const mongoose = require("mongoose");

//Schema
const AutorSchema = new mongoose.Schema({
    nombre: { 
        type: String,
        required: [true,"Por favor incluir nombre"],
        minLength : [3, "Nombre debe incluir al menos 3 caracteres"]  
    },

    },{ timestamps: true }
);

const Autor = mongoose.model('Autor', AutorSchema)

module.exports = Autor