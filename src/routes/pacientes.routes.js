// la misión de este archivo es mantener las rutas

import { Router } from "express";
import pacienteCtrl from "../controllers/pacientes.controllers";

//instancio o guardo a Router en una constante

const routerPacientes = Router();

//creo la ruta 
routerPacientes.route("/adminPacientes").get(pacienteCtrl.listaPacientes);


export default routerPacientes;
