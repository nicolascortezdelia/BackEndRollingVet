import mongoose, {Schema} from "mongoose";

const adminSchema = new Schema ({
  email:{
      type: String,
      unique:true,
      required:true,
      minlength: 5,
      maxlength: 25

  },

  password:{
      type: String,
      required:true
  }
 
});


const AdminModelo = mongoose.model("admin", adminSchema)

export default AdminModelo;

