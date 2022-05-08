import mongoose, {Schema} from "mongoose";

const adminSchema = new Schema ({
    useradmin:{ 
        type: String,
        required: true
  },

  password:{
    type: String,  
    required: true
  }

}

);

adminSchema

const AdminModelo = mongoose.model("admin", adminSchema)

export default AdminModelo

