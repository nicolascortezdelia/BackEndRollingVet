//aquí se modela el dato que se guarda en la Base de Datos

import mongoose, {Schema} from "mongoose";

const pacienteSchema = new Schema({
    nombre:{
        type: String,
        maxlength: 23,
        minlength: 0,
        required: true

    },
    apellido:{
        type: String,
        maxlength: 23,
        minlength: 0,
        required: true

    },
    eMail:{
        type: String,
        required: true

    },
    telefono:{
        type: Number,
        required: true


    } ,
    nombreMascota: {
        type: String,
        maxlength: 23,
        minlength: 0,
        required: true

    },
    especie: {
        type: String,
        maxlength: 23,
        minlength: 0,
        required: true
    },
    raza: {
        type: String,
        maxlength: 23,
        minlength: 0,
        required: true

    }

});

const PacienteModelo = mongoose.model("paciente", pacienteSchema)
