import TurnoModelo from "../models/turnos";
import pacienteCtrl from "./pacientes.controllers";
//aquí va la lógica

const turnosCtrl = {};

//agregamos la lógica para OBTENER la lista de turnos

turnosCtrl.listaTurnos = async (req, res)=>{
    //la lógica necesaria para obtener la Lista de Turnos
   try {
    const listaDeLosTurnos = await TurnoModelo.find();
    res.status(200).json(listaDeLosTurnos);
       
   } catch (error) {
    console.log(error)

    //envío un código de error
    res.status(404).json({
        mensaje: "Error al intentar listar el turno"
    })
   }
};

// agregamos la función para CREAR un turno

const formatDate = (timestamp) => new Date(timestamp).toDateString()

turnosCtrl.crearTurno = async (req,res)=>{
    try {
        //validar todos los campos

        //crear el TURNO en la base de datos

        const turnoNuevo = new TurnoModelo({
            TurnoPetName: req.body.TurnoPetName,
            TurnoDoctor: req.body.TurnoDoctor,
            TurnoDetalle: req.body.TurnoDetalle,
            horario: req.body.horario,

        })

        // validar turno
        const turnoOcupado = await TurnoModelo.find({
            TurnoDoctor: turnoNuevo.TurnoDoctor,
            horario: turnoNuevo.horario,
        });

        if (turnoOcupado) {
            return res.status(404).json({mensaje: `Turno para las ${formatDate(turnoNuevo.horario)} ocupado` });
        }

        //guardar en la base de datos
      await turnoNuevo.save();

      //enviar respuesta
      res.status(201).json({
          mensaje: "El turno fue agregado correctamente"
      })
    
        
        
    } catch (error) {
        console.log(error)
        //envío un código de error
        res.status(404).json({
            mensaje: "No se pudo agregar un turno"
        })
        
    }

}


turnosCtrl.obtenerTurno = async (req, res)=>{
    try {
        console.log(req.params.id)

        const turnoBuscado = await TurnoModelo.findById(req.params.id)

        res.status(200).json(turnoBuscado);

        
    } catch (error) {
        console.log(error)

    //envío un código de error
    res.status(404).json({
        mensaje: "No se pudo encontrar el turno"
    })
        
    }
};

turnosCtrl.editarTurno = async (req, res)=>{
    try {

        // validar turno
        const turnoOcupado = await TurnoModelo.find({
            TurnoDoctor: req.body.TurnoDoctor,
            horario: req.body.horario,
        });

        if (turnoOcupado) {
            return res.status(404).json({mensaje: `Turno para las ${formatDate(turnoNuevo.horario)} ocupado` });
        }

        await TurnoModelo.findByIdAndUpdate(req.params.id, req.body);

        res.status(200).json({mensaje:"se editó correctamente el paciente"})
        
    } catch (error) {
        console.log(error);

        //envío un código de error
        res.status(404).json({
          mensaje: "No se pudo editar el paciente ",
        });
    }
}


turnosCtrl.borrarTurno = async (req, res)=>{
    try {
        await TurnoModelo.findByIdAndDelete(req.params.id);

        res.status(200).json({mensaje:"se eliminaron correctamente los datos del turno"})
        
    } catch (error) {

        console.log(error);

    //envío un código de error
    res.status(404).json({
      mensaje: "Error al intentar borrar los datos del turno",
    });
        
    }

}

export default turnosCtrl;