const jwt = require('jsonwebtoken');

const validateJWT = (req, res, next) => {

    const tok = req.headers.authorization;
    
    if (!tok) {

        return res.status(401).json({
            ok: false,
            msn: "Token no encontrado"
        });
    };

    try {

        const payload = jwt.verify(tok, process.env.JWT_SECRET);
        req.uid = payload.uid;
        req.nombre = payload.nombre;
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    };
    next();
};


module.exports = { validateJWT };