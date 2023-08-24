const express = require('express');
const { check } = require('express-validator');
// const {} = require('../controllers/blogController');
const router = express.Router();
const { validarEx } = require('../middlewares/validation');

//RECOGER BLOGS
router.get('/',);

//RECOGER BLOG POR NOMBRE
router.get("/:title",);

//CREAR BLOG
router.post("/",
    [
        check("title", "El titulo es obligatorio").not().isEmpty(),
        check("text", "La información es obligatoria").not().isEmpty(),
        validarEx
    ], );

//EDITAR BLOG
router.put("/:id",
    [
        check("title", "El titulo es obligatorio").not().isEmpty(),
        check("text", "La información es obligatoria").not().isEmpty(),
        validarEx
    ], );

//BORRAR BLOG
router.delete("/:id", );


module.exports = router