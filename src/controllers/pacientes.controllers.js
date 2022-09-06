import PacienteModelo from '../models/pacientes';

const pacienteCtrl = {};

pacienteCtrl.listaPacientes = async (req, res) => {
  try {
    const listaDeLosPacientes = await PacienteModelo.find();

    res.status(200).json(listaDeLosPacientes);
  } catch (error) {
    console.log(error);

    res.status(404).json({
      mensaje: 'Error al intentar listar el paciente',
    });
  }
};

pacienteCtrl.crearPaciente = async (req, res) => {
  try {
    
    const pacienteNuevo = new PacienteModelo({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      eMail: req.body.eMail,
      telefono: req.body.telefono,
      nombreMascota: req.body.nombreMascota,
      especie: req.body.especie,
      raza: req.body.raza,
    });

    await pacienteNuevo.save();

    res.status(201).json({
      mensaje: 'El paciente fue agregado correctamente',
    });
  } catch (error) {
    console.log(error);

    res.status(404).json({
      mensaje: 'No se pudo agregar el paciente',
    });
  }
};

pacienteCtrl.obtenerPacienteUnico = async (req, res) => {
  try {
  

    const pacienteBuscado = await PacienteModelo.findById(req.params.id);

    res.status(200).json(pacienteBuscado);
  } catch (error) {
    console.log(error);

    res.status(404).json({
      mensaje: 'No se pudo obtener el paciente buscado',
    });
  }
};

pacienteCtrl.editarPaciente = async (req, res) => {
  try {
    

    await PacienteModelo.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ mensaje: 'se editó correctamente el paciente' });
  } catch (error) {
    console.log(error);

    //envío un código de error
    res.status(404).json({
      mensaje: 'No se pudo editar el paciente ',
    });
  }
};

pacienteCtrl.borrarPaciente = async (req, res) => {
  try {
    await PacienteModelo.findByIdAndDelete(req.params.id);

    res
      .status(200)
      .json({ mensaje: 'se eliminaron correctamente los datos del paciente' });
  } catch (error) {
    console.log(error);

    //envío un código de error
    res.status(404).json({
      mensaje: 'Error al intentar borrar los datos del paciente ',
    });
  }
};

export default pacienteCtrl;
