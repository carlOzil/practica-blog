//REQUERIMIENTO EXPRESS
const express = require ('express');
//REQUERIMIENTO BBDD
const { dbConnect } = require('./helpers/connection');
//REQUERIMIENTO CORS
const cors = require ('cors');
//REQUERIMIENTO COOKIE-PARSER
const cookieParser = require('cookie-parser');
//REQUERIMIENTO DOTENV
require('dotenv').config();

//SERVIDOR
const app = express();

//PORT
const port = process.env.PORT;

//CONEXIÓN BBDD
dbConnect();

//CORS
app.use(cors());

//COOKIEPARSER
app.use(cookieParser());

//parse application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: false }))

//parse application/json
app.use(express.json())

//SERVIDOR A LA ESCUCHA
app.listen(port, () => {
    console.log(`Servidor BACK a la escucha del puerto ${port}`);
});