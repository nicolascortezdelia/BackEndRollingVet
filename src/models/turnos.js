//aquí se modela el dato que se guarda en la Base de Datos

import mongoose, {Schema} from "mongoose";

const turnoSchema = new Schema({
    TurnoPetName:{
        type: String,
        maxlength: 23,
        minlength: 0,
        required: true


    },
    TurnoDoctor:{
        type: String,
        maxlength: 200,
        required: true

    },
    TurnoDetalle:{
        type: String,
        required: true

    },
    TurnoFecha: {
        required: [true, "la fecha es requerida"]

    }

    
   
});

const TurnoModelo = mongoose.model("turno", turnoSchema);

export default TurnoModelo;