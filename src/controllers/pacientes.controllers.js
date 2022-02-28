import PacienteModelo from "../models/pacientes";

//aquí va la lógica

const pacienteCtrl = {};

//agregamos la lógica para obtener la lista de pacientes

pacienteCtrl.listaPacientes = async (req, res) => {
  //la lógica necesaria para obtener la Lista de Pacientes
  try {
    //crear un array para que guarde todos los pacientes que encuentre en la DB

    const listaDeLosPacientes = await PacienteModelo.find();

    res.status(200).json(listaDeLosPacientes);
  } catch (error) {
    console.log(error);

    //envío un código de error
    res.status(404).json({
      mensaje: "Error al intentar listar el paciente",
    });
  }
};

//agregamos la función para CREAR un nuevo objeto Paciente
pacienteCtrl.crearPaciente = async (req, res) => {
  try {
    console.log(req.body);

    //crear el PACIENTE
    const pacienteNuevo = new PacienteModelo({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      eMail: req.body.eMail,
      telefono: req.body.telefono,
      nombreMascota: req.body.nombreMascota,
      especie: req.body.especie,
      raza: req.body.raza,
    });

    //GUARDAR en la base de datos
    await pacienteNuevo.save();

    //enviar respuesta de la petición

    res.status(201).json({
      mensaje: "El paciente fue agregado correctamente",
    });
  } catch (error) {
    console.log(error);

    //envío un código de error
    res.status(404).json({
      mensaje: "No se pudo agregar el paciente",
    });
  }
};

pacienteCtrl.obtenerPacienteUnico = async (req, res) => {
  try {
    //obtener el id del request
    console.log(req.params.id);

    //buscar el paciente
    const pacienteBuscado = await PacienteModelo.findById(req.params.id);

    //enviar el paciente por respuesta
    res.status(200).json(pacienteBuscado);
  } catch (error) {
    console.log(error);

    //envío un código de error
    res.status(404).json({
      mensaje: "No se pudo obtener el paciente buscado",
    });
  }
}

pacienteCtrl.editarPaciente = async (req,res)=>{
    try {
        console.log(req.params.id)

        console.log(req.body)
        //agregar validacion
        await PacienteModelo.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({mensaje:"se editó correctamente el paciente"})

    } catch (error) {
        console.log(error);

    //envío un código de error
    res.status(404).json({
      mensaje: "No se pudo editar el paciente ",
    });
        
        
    }
}

pacienteCtrl.borrarPaciente = async (req, res)=>{
  try {

    await PacienteModelo.findByIdAndDelete(req.params.id);

    res.status(200).json({mensaje:"se eliminaron correctamente los datos del paciente"})
    
  } catch (error) {
    console.log(error);

    //envío un código de error
    res.status(404).json({
      mensaje: "Error al intentar borrar los datos del paciente ",
    });
  
    
  }
}

export default pacienteCtrl;
