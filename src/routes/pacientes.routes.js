// la misión de este archivo es mantener las rutas

import { Router } from "express";
import pacienteCtrl from "../controllers/pacientes.controllers";

//instancio o guardo a Router en una constante

const routerPacientes = Router();

//creo la ruta
routerPacientes
  .route("/Clientes")
  .get(pacienteCtrl.listaPacientes)
  .post(pacienteCtrl.crearPaciente);

//creo una ruta para un paciente ÚNICO

routerPacientes
  .route("/Clientes/:id")
  .get(pacienteCtrl.obtenerPacienteUnico)
  .put(pacienteCtrl.editarPaciente)

export default routerPacientes;
