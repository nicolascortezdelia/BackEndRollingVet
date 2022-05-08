import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import routerPacientes from "./routes/pacientes.routes";
import routerTurnos from "./routes/turnos.routes";
import routerAdmin from "./routes/admin.routes";
import "./database"

// creo una instancia de Express
const app = express();

//aquí creamos un puerto

app.set("port", process.env.PORT || 4000);

//que se escuche el puerto creado

app.listen(app.get("port"), ()=>{
    console.log("estoy en el puerto " + app.get("port"));
    
});

//middlewares

app.use(morgan("dev"));//sirve para mostrar info extra en la terminal

app.use(cors());// sirve para aceptar peticiones externas

// para que el Backend interprete el formato JSON:

app.use(express.json());

app.use(express.urlencoded({extended:true}));


//aquí mostramos el index.html de nuestra carpeta pública

app.use(express.static(path.join(__dirname,"../public")))

//aquí van las rutas

app.use("/apivet", routerPacientes);

app.use("/apivet", routerTurnos);

//app.use("/apivet", routerAdmin)

