import multer from 'multer';

export const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, process.env.FILEPATH!)
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    },
})