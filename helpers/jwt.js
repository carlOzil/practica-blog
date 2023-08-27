const jwt = require('jsonwebtoken');

//GENERACIÓN DEL TOKEN Y ALMACENADO EN COOKIES
const generateJWT = (uid, name) => {

    return new Promise((resolve, reject) => {

        const payload = { uid, name };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '30m' },
            (error, token) => {
                if (error) {
                    console.log(error);
                    reject('Falló generación de token');
                };
                resolve(token);
                res.cookie('myToken', token, {
                    httpOnly: true, 
                    maxAge: 1800000
                });
            });
    });
};

module.exports = {
    generateJWT
};