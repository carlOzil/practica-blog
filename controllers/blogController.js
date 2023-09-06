const Article = require('../models/blogModel');

//RECOGER TODOS LOS ARTÍCULOS DEL BLOG
const getArticles = async (req, res) => {

    try {
        const articles = await Article.find();
        return res.status(200).json({
            ok: true,
            msg: 'Lista de artículos',
            data: articles
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Error, contacta con el administrador'
        });
    };
};

//RECOGER ARTICULOS POR NOMBRE
const findArticles = async (req, res) => {
    const title = await req.params.title;

    try {
        const exist = await Article.find({ title: title });

        if (exist) {
            return res.status(200).json({
                ok: true,
                data: exist,
                msg: 'Artículos encontrados:'
            });

        } else {
            return res.status(400).json({
                msg: 'No hay artículos con ese título'
            });
        };

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Contacta con el administrador'
        });
    };
};

//CREAR ARTÍCULO
const createArticle = async (req, res) => {
    const article = new Article(req.body);

    try {
        const { title } = article;
        const exist = await Article.findOne({ title: title })

        if (exist) {
            return res.status(400).json({
                ok: false,
                msg: "Ese artículo ya está publicado",
            });
        };

        const savedArticle = await article.save()
        return res.status(201).json({
            ok: true,
            article: savedArticle,
            msg: "Artículo añadido"
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: "Contacta con el administrador"
        });
    };
};

//EDITAR ARTÍCULO
const editArticle = async (req, res) => {
    const id = await req.params.id;

    try {
        const exist = await Article.findOne({ _id: id });
        const editedArticle = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (exist) {
            return res.status(200).json({
                ok: true,
                article: editedArticle,
                msg: "Articulo actualizado"
            });
        };
        return res.status(400).jason({
            ok: false,
            msg: "Artículo inexistente"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Contacta con el administrador"
        });
    };
};

//BORRAR ARTÍCULO
const deleteArticle = async (req, res) => {
    const id = await req.params.id;

    try {
        const exist = await Article.findByIdAndDelete(id);

        if (exist) {
            return res.status(200).json({
                ok: true,
                data: exist,
                msg: "Artículo borrado"
            });
        } else {
            return res.status(400).jason({
                msg: "La noticia que buscas no existe"
            });
        };

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Contacta con el administrador"
        });
    };
};

//MOSTRAR ARTICULOS PARA CADA ESCRITOR
const articlesForWriters = async (req, res) => {
    const writer = await req.params.writer;

    try {
        const exist = await Article.find({ writer: writer });

        if (exist) {
            return res.status(200).json({
                ok: true,
                data: exist,
                msg: "Estos son tus artículos:"
            })
        } else {
            return res.status(400).json({
                msg: "Aún no has escrito artículos"
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Contacta con el administrador"
        })
    }

}

//CARGAR IMAGENES MULTER
const loadImg = (req, res) => {
    console.log(req.file)
    res.send('Imagen cargada!')
};


module.exports = {
    getArticles,
    findArticles,
    createArticle,
    editArticle,
    deleteArticle,
    articlesForWriters,
    loadImg
};