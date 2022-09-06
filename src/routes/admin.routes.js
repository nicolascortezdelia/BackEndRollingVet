import { Router } from 'express';
import adminCtrl from '../controllers/admin.controllers';

const routerAdmin = Router();

routerAdmin
  .route('/admin')
  .get(adminCtrl.listarAdmin)
  .post(adminCtrl.crearAdmin);

export default routerAdmin;
