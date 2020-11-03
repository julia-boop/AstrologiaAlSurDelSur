const express = require("express"); //Requerimos express
const app = express(); //Requerimos su funcion de alto nivel
const path = require('path'); //Requerimos path

app.set("view engine", "ejs") //Aclaramos cual sera el motor del template
app.set('views', path.resolve(__dirname, 'src','views')); //Aclaramos la carpeta vistas
app.use(express.static("public")); //Definimos una carpeta  estatica: public.

app.get("/", function(req, res){ // Creamos rutas.
    res.render("index"); //Renderizamos la vista en "index" (no hace falta .ejs)
})

app.listen(3000, function(){ //Corremos el server en escucha
    console.log("El servidor está corriendo en el puerto 3000")
})

console.log(path.resolve(__dirname, 'src', 'views'))