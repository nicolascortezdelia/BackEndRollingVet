import { Router } from "express";
import adminCtrl from "../controllers/admin.controllers";

const routerAdmin = Router()

//crear la ruta 

routerAdmin.route("/admin").post(adminCtrl.crearAdmin)

export default routerAdmin

