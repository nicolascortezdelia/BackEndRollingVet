import AdminModelo from "../models/adminUser"
const adminCtrl = {};

adminCtrl.listarAdmin = async(req,res)=>{
    try{
        const listarAdmin = await AdminModelo.find();
        res.status(200).json(listarUsuario);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: "Error al listar los admin"
        })
    }
}

adminCtrl.crearAdmin = (req, res)=>{
    try {
        // validaciones
        if(!validateEmail(req.body.email)|| !validatePassword(req.body.password)){
            res.status(404).json({
                mensaje: "Error al validar los datos"
            })
            return;
        };

        // crearmos el admin

        const nuevoAdmin = new AdminModelo({
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 10),
        })



        
    } catch (error) {
        
    }

}

export default adminCtrl