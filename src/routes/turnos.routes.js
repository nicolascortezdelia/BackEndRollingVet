// la misión de este archivo es mantener las rutas

import { Router } from "express";

import turnosCtrl from "../controllers/turnos.controllers";


//guardo el Router en una constante

const routerTurnos = Router();

//creo la ruta

routerTurnos.route("/adminTurnos").get(turnosCtrl.listaTurnos)

export default routerTurnos;