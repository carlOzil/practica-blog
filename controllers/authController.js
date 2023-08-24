const User = require('../models/publisherModel');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../helpers/jwt');

//CREAR USUARIO
const createUser = async (req, res) => {
    const { email, name, password, passConfirm, role, date } = req.body;

    try {
        let user = await User.findOne({ email: email });

        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe una cuenta con ese email'
            });
        };

        if (password != passConfirm) {
            return res.status(400).json({
                ok: false,
                msg: 'La contraseña no coincide'
            });
        };

        const newUser = { email, name, password, role, date };
        user = new User(newUser)

        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        const saveUser = await user.save();

        return res.status(201).json({
            ok: true,
            data: saveUser,
            msg: "Cuenta de usuario creada"
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Contacta con el administrador'
        });
    };
};

//INICIAR SESIÓN
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email: email });

        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: 'No hay ninguna cuenta asociada a ese email'
            });
        };
        let passOk = await bcrypt.compare(password, user.password)

        if (!passOk) {
            return res.status(400).json({
                ok: false,
                msg: 'La contraseña no coincide'
            });
        };
        const token = await generateJWT(user.id, user.name);

        res.status(200).json({
            ok: true,
            uid: user.id,
            name: user.name,
            email: user.email,
            token
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Consulta con el administrador'
        });
    };
};

//RENOVAR TOKEN
const renewToken = async (req, res) => {
    const { uid, name } = req

    const token = await generateJWT(uid, name);

    res.status(200).json({
        ok: true,
        msg: "Token renovado",
        user: {
            uid,
            name
        }, token
    });
};


module.exports = {
    createUser,
    loginUser,
    renewToken
}