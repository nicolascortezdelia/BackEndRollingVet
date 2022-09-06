import { Router } from 'express';
import pacienteCtrl from '../controllers/pacientes.controllers';

const routerPacientes = Router();

routerPacientes
  .route('/Clientes')
  .get(pacienteCtrl.listaPacientes)
  .post(pacienteCtrl.crearPaciente);

routerPacientes
  .route('/Clientes/:id')
  .get(pacienteCtrl.obtenerPacienteUnico)
  .put(pacienteCtrl.editarPaciente)
  .delete(pacienteCtrl.borrarPaciente);

export default routerPacientes;
