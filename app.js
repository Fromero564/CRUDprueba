const express = require('express');
const methodOverride = require('method-override') // Se instala esta dependencia para trabajar con los verbos PUT y DELETE.
const path = require('path');
const router = require('./routers/mainRouter.js')// Se traen las rutas que voy a tener en la carpeta routers

const app = express();

const PORT = 3000; //Se configura aparte el puerto para poder cambiarlo desde la variable

//Para poder manejar los datos enviados desde el formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Puerto de escucha
app.listen(PORT,()=>{
  console.log("Se prendio el puerto:" + PORT)
});

app.use(methodOverride("_method"));

/*Motor EJS*/
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


/*Renderizar vistas*/
app.use('/',router)