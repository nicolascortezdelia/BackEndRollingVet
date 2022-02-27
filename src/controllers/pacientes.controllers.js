//aquí va la lógica

const pacienteCtrl = {};

//agregamos la lógica para obtener la lista de pacientes

pacienteCtrl.listaPacientes = (req,res)=>{
    //la lógica necesaria para obtener la Lista de Pacientes
    
    res.send("hola desde el backend de pacientes")
    
};




//agregamos la función para CREAR un nuevo objeto Paciente
pacienteCtrl.crearPaciente = (req,res)=>{
    console.log(req.body)
    res.send("Listo! he creado un nuevo Paciente")

};

export default pacienteCtrl;