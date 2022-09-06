import { Router } from 'express';

import turnosCtrl from '../controllers/turnos.controllers';

const routerTurnos = Router();

routerTurnos
  .route('/turnos')
  .get(turnosCtrl.listaTurnos)
  .post(turnosCtrl.crearTurno);

routerTurnos
  .route('/turnos/:id')
  .get(turnosCtrl.obtenerTurno)
  .put(turnosCtrl.editarTurno)
  .delete(turnosCtrl.borrarTurno);

export default routerTurnos;
