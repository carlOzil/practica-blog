const express = require('express');
const { check } = require('express-validator');
const { getArticles, findArticles, createArticle, editArticle, deleteArticle, articlesForWriters, loadImg, articleId } = require('../controllers/blogController');
const { validateEx } = require('../middlewares/validation');
const { multerUpload } = require('../helpers/multer');

const router = express.Router();

//RECOGER BLOGS
router.get('/', getArticles);

//BUSCAR BLOGS POR NOMBRE
router.get("/:title", findArticles);

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

//CARGAR ARTICULOS PARA CADA ESCRITOR
router.get("/:writer", findArticles);

//CARGAR IMGS
router.post("/loadimg", multerUpload.single('file'), loadImg)

//AMPLIAR ARTICULO
router.get("/:id", articleId);


module.exports = router