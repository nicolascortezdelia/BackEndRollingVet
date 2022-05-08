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
        
    } catch (error) {
        
    }

}

export default adminCtrl