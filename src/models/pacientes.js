import mongoose, { Schema } from 'mongoose';

const pacienteSchema = new Schema({
  nombre: {
    type: String,
    maxlength: 23,
    minlength: 0,
    required: true,
  },
  apellido: {
    type: String,
    maxlength: 23,
    minlength: 0,
    required: true,
  },
  eMail: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 25,
  },
  telefono: {
    type: Number,
    required: true,
    minlength: 5,
    maxlength: 25,
  },
  nombreMascota: {
    type: String,
    maxlength: 23,
    minlength: 0,
    required: true,
  },
  especie: {
    type: String,
    maxlength: 23,
    minlength: 0,
    required: true,
  },
  raza: {
    type: String,
    maxlength: 23,
    minlength: 0,
    required: true,
  },
});

const PacienteModelo = mongoose.model('paciente', pacienteSchema);

export default PacienteModelo;
