const { validationResult } = require('express-validator');

const validateEx = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400).json({
            ok: false,
            errors
        });
    };
    next()
};


module.exports = {
    validateEx
}