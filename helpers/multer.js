const multer = require('multer')
const path = require('path');


const multerUpload = multer({
    storage: multer.diskStorage({
        destination: './uploads/',
        filename: (req, file, cb) => {
            const fileExt = path.extname(file.originalname);
            const fileName = file.originalname.split(fileExt)[0];
            cb(null, `${fileName}-${Date.now()}${fileExt}`)
        }
    }),
    fileFilter: (req, file, cb) => {
        const xtensions = ['image/jpeg', 'image/jpg'];
        if (xtensions.includes(file.mimetype)) cb(null, true)
        else cb(new Error('Extension no admitida'))
    }
});

module.exports = {
    multerUpload
};