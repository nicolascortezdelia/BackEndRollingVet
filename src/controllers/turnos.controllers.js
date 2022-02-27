import TurnoModelo from "../models/turnos";
//aquí va la lógica

const turnosCtrl = {};

//agregamos la lógica para OBTENER la lista de turnos

turnosCtrl.listaTurnos = (req, res)=>{
    //la lógica necesaria para obtener la Lista de Turnos
    res.send("hola desde el backend de turnos")

};

//agregamos la función para CREAR un turno

turnosCtrl.crearTurno = async (req,res)=>{
    try {
        console.log(req.body)
        //validar todos los campos

        //crear el producto en la base de datos

        const turnoNuevo = new TurnoModelo({
            TurnoPetName: req.body.TurnoPetName,
            TurnoDoctor: req.body.TurnoDoctor,
            TurnoDetalle: req.body.TurnoDetalle,
            TurnoFecha: req.body.TurnoFecha,
            TurnoHora: req.body.TurnoHora

        })

        //guardar en la base de datos

      await  turnoNuevo.save();

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

export default turnosCtrl;