const jwt = require('jsonwebtoken');

//GENERACIÓN DEL TOKEN
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
                    reject('Fallo al generar token');
                };
                resolve(token);
            });
    });
};

module.exports = {
    generateJWT
};