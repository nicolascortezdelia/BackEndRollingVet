//aquí va la lógica

const turnosCtrl = {};

//agregamos la lógica para OBTENER la lista de turnos

turnosCtrl.listaTurnos = (req, res)=>{
    //la lógica necesaria para obtener la Lista de Turnos
    res.send("hola desde el backend de turnos")

};

turnosCtrl.crearTurno = (req,res)=>{
    res.send("Listo! se ha creado un nuevo Turno")


}

export default turnosCtrl;