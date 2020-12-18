require('dotenv').config();
const express = require("express"); //Requerimos express
const app = express(); //Requerimos su funcion de alto nivel
const path = require('path'); //Requerimos path
const mainRouter = require('./src/routers/mainRouter');
const userRouter = require('./src/routers/userRouter');
const port = process.env.PORT || 3000; 
const methodOverride =  require('method-override');
const session = require('express-session');
const sessionToLocals = require('./src/middlewares/sessionToLocals')

app.set("view engine", "ejs") //Aclaramos cual sera el motor del template
app.set('views', path.resolve(__dirname, 'src','views')); //Aclaramos la carpeta vistas
app.use(express.static("public")); //Definimos una carpeta  estatica: public.
app.use(session({secret:'chulalove'}));


app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method')); 

app.use(sessionToLocals);

app.use("/", mainRouter);
app.use("/user", userRouter);


app.listen(port, () => console.log("Servidor corriendo en el puerto " + port));