// la misión de este archivo es mantener las rutas

import { Router } from "express";

import turnosCtrl from "../controllers/turnos.controllers";

//guardo el Router en una constante

const routerTurnos = Router();

//creo la ruta

routerTurnos
  .route("/turnos")
  .get(turnosCtrl.listaTurnos)
  .post(turnosCtrl.crearTurno);

routerTurnos
  .route("/turnos/:id")
  .get(turnosCtrl.obtenerTurno)
  .put(turnosCtrl.editarTurno);

export default routerTurnos;
