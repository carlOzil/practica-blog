const express = require ('express');

require('dotenv').config();

//SERVIDOR
const app = express();

//PORT
const port = process.env.PORT;

//SERVIDOR A LA ESCUCHA
app.listen(port, () => {
    console.log(`servidor front a la escucha del puerto ${port}`);
});