import express from "express";
import morgan from "morgan";
import cors from "cors";

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


//ruta de prueba

app.get("/adminPacientes", (req, res)=>{

    res.send("hola, estoy en el BackEnd adminPacientes")

});

app.get("/adminTurnos", (req, res)=>{

    res.send("hola, estoy en el BackEnd adminTurnos")

});


