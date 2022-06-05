//aquí se modela el dato que se guarda en la Base de Datos

import mongoose, {Schema} from "mongoose";

const turnoSchema = new Schema({
    PetName:{
        type: String,
        maxlength: 23,
        minlength: 0,
        required: true


    },
    Doctor:{
        type: String,
        maxlength: 200,
        required: true

    },
    Detalle:{
        type: String,
        required: true

    },
    horario: {
        type: Number,
        required: true
    }
});

const TurnoModelo = mongoose.model("turno", turnoSchema);

export default TurnoModelo;