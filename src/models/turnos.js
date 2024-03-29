import mongoose, { Schema } from 'mongoose';

const turnoSchema = new Schema({
  TurnoPetName: {
    type: String,
    maxlength: 23,
    minlength: 0,
    required: true,
  },
  TurnoDoctor: {
    type: String,
    maxlength: 200,
    required: true,
  },
  TurnoDetalle: {
    type: String,
    required: true,
  },
  TurnoFecha: {
    type: String,
    required: true,
  },

  TurnoHora: {
    type: String,
    required: true,
  },
});

const TurnoModelo = mongoose.model('turno', turnoSchema);

export default TurnoModelo;
