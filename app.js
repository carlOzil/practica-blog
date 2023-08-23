const express = require ('express');
const cors = require ('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config();

//SERVIDOR
const app = express();

//PORT
const port = process.env.PORT;

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
    console.log(`servidor front a la escucha del puerto ${port}`);
});