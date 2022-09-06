import TurnoModelo from '../models/turnos';
import pacienteCtrl from './pacientes.controllers';

const turnosCtrl = {};

turnosCtrl.listaTurnos = async (req, res) => {
  try {
    const listaDeLosTurnos = await TurnoModelo.find();

    res.status(200).json(listaDeLosTurnos);
  } catch (error) {
    console.log(error);

    res.status(404).json({
      mensaje: 'Error al intentar listar el turno',
    });
  }
};

turnosCtrl.crearTurno = async (req, res) => {
  try {
    console.log(req.body);

    const turnoNuevo = new TurnoModelo({
      TurnoPetName: req.body.TurnoPetName,
      TurnoDoctor: req.body.TurnoDoctor,
      TurnoDetalle: req.body.TurnoDetalle,
      TurnoFecha: req.body.TurnoFecha,
      TurnoHora: req.body.TurnoHora,
    });

    await turnoNuevo.save();

    res.status(201).json({
      mensaje: 'El turno fue agregado correctamente',
    });
  } catch (error) {
    console.log(error);

    res.status(404).json({
      mensaje: 'No se pudo agregar un turno',
    });
  }
};

turnosCtrl.obtenerTurno = async (req, res) => {
  try {
    console.log(req.params.id);

    const turnoBuscado = await TurnoModelo.findById(req.params.id);

    res.status(200).json(turnoBuscado);
  } catch (error) {
    console.log(error);

    res.status(404).json({
      mensaje: 'No se pudo encontrar el turno',
    });
  }
};

turnosCtrl.editarTurno = async (req, res) => {
  try {
    console.log(req.params.id);

    console.log(req.body);

    await TurnoModelo.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({ mensaje: 'se editó correctamente el paciente' });
  } catch (error) {
    console.log(error);

    res.status(404).json({
      mensaje: 'No se pudo editar el paciente ',
    });
  }
};

turnosCtrl.borrarTurno = async (req, res) => {
  try {
    await TurnoModelo.findByIdAndDelete(req.params.id);

    res
      .status(200)
      .json({ mensaje: 'se eliminaron correctamente los datos del turno' });
  } catch (error) {
    console.log(error);

    res.status(404).json({
      mensaje: 'Error al intentar borrar los datos del turno',
    });
  }
};

export default turnosCtrl;
