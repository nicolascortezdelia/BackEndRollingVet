import mongoose from "mongoose";

//crear la cadena de conexión a la DB, dónde está la DB 

//const url = "mongodb://localhost:27017/rollingvet";
const url = "mongodb+srv://NicoCortez:mongodbatlas1402@cluster0.7liso.mongodb.net/rollingvet"

//cómo me conecto a la DB

mongoose.connect(url);

//prueba de conexión correcta
const connection = mongoose.connection; 

connection.once("open", ()=>{
    console.log("Estoy conectado a la Base de Datos!")
})