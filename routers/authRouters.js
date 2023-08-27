const express = require("express");
const { check } = require('express-validator');
const { createUser, loginUser, renewToken } = require('../controllers/authController');
const { validateEx } = require('../middlewares/validation');
const { validateJWT } = require('../middlewares/validationJWT');

const router = express.Router();
//REGISTRO
router.post('/register',
    [
        check('email', 'Email obligatorio').isEmail(),
        check('name', 'Nombre obligatorio').not().isEmpty(),
        check('password').notEmpty().withMessage('Contraseña obligatoria').isLength({ min: 6 }).withMessage('mínimo 6 caracteres').matches(/^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/).withMessage('La contraseña debe contener al menos una mayúscula y un número'),
        check('passConfirm').not().isEmpty(),
        validateEx
    ], createUser);

//INICIO SESIÓN
router.post('/login',
    [
        check('email', 'Email obligatorio').isEmail(),
        check('password', 'Password obligatorio').not().isEmpty(),
        validateEx
    ], loginUser);

//RENOVAR TOKEN
router.get('/renew', validateJWT, renewToken);


module.exports = router