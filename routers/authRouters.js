const express = require("express");
const { check } = require('express-validator');
// const {} = require('../controllers/authController');
const router = express.Router();
const { validarEx } = require('../middlewares/validation');

//REGISTRO
router.post('/register',
    [
        check('email', 'Email obligatorio').isEmail(),
        check('name', 'Nombre obligatorio').not().isEmpty(),
        check('password').notEmpty().withMessage('Contraseña obligatoria').isLength({ min: 6 }).withMessage('mínimo 6 caracteres').matches(/^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/).withMessage('La contraseña debe contener al menos una mayúscula y un número'),
        check('passConfirm').not().isEmpty(),
        validarEx
    ], );

//INICIO SESIÓN
router.post('/login',
    [
        check('email', 'Email obligatorio').isEmail(),
        check('password', 'Password obligatorio').not().isEmpty(),
        validarEx
    ], );


module.exports = router