// la misión de este archivo es mantener las rutas

import { Router } from "express";
import pacienteCtrl from "../controllers/pacientes.controllers";

//instancio o guardo a Router en una constante

const router = Router();

//creo la ruta 
router.route("/adminPacientes").get(pacienteCtrl.listaPacientes);


export default router;
