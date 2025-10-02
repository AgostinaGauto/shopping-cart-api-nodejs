
require('dotenv').config();
const express= require("express");
const session= require("express-session");
const flash= require("connect-flash");
const app= express();

const {create}= require('express-handlebars');
const hbs= create({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: 'views/layouts',
    helpers: {
        eq: function (a, b){
            return a === b;
        }
    }

});

// Registrar Handlebars como motor de plantillas para archivos con extensión .hbs.
app.engine(".hbs", hbs.engine)
// Determinar que la extensión por defecto de las vistas será .hbs
app.set("view engine", ".hbs");
// Determinar la carpeta donde Express buscará las vistas
app.set("views", "./views");


app.listen(process.env.PORT, ()=>{
    console.log('Servidor corriendo en el puerto: '+ process.env.PORT);

});

