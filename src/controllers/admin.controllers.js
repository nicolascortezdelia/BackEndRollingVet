import AdminModelo from '../models/adminUser';
import { validateEmail, validatePassword } from '../helpers/validaciones';

import bcrypt from 'bcrypt';

const adminCtrl = {};

adminCtrl.listarAdmin = async (req, res) => {
  try {
    const listarAdmin = await AdminModelo.find();
    res.status(200).json(listarAdmin);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Error al listar los admin',
    });
  }
};

adminCtrl.crearAdmin = async (req, res) => {
  try {
  
    if (
      !validateEmail(req.body.email) ||
      !validatePassword(req.body.password)
    ) {
      res.status(404).json({
        mensaje: 'Error al validar los datos',
      });
      return;
    }

   

    const nuevoAdmin = new AdminModelo({
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
    });

    await nuevoAdmin.save();

    res.status(201).json({
      mensaje: 'Se creó un Administrador exitosamente',
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Error al intentar crear el Administrador',
    });
  }
};

export default adminCtrl;
