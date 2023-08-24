const express = require('express');
const { check } = require('express-validator');
const { getArticles, findArticle, createArticle, editArticle, deleteArticle } = require('../controllers/blogController');
const router = express.Router();
const { validateEx } = require('../middlewares/validation');

//RECOGER BLOGS
router.get('/', getArticles);

//RECOGER BLOG POR NOMBRE
router.get("/:title", findArticle);

//CREAR BLOG
router.post("/",
    [
        check("title", "El titulo es obligatorio").not().isEmpty(),
        check("text", "La información es obligatoria").not().isEmpty(),
        validateEx
    ], createArticle);

//EDITAR BLOG
router.put("/:id",
    [
        check("title", "El titulo es obligatorio").not().isEmpty(),
        check("text", "La información es obligatoria").not().isEmpty(),
        validateEx
    ], editArticle);

//BORRAR BLOG
router.delete("/:id", deleteArticle);


module.exports = router