import multer from "multer";
import path from 'path'

const upload = multer({
    dest: 'uploads/',
    limits: {fileSize: 15*1024*1024},//15mb is the maximum uploading size.

    storage: multer.diskStorage({
        destination:'uploads/',
        filename: (req,file,cb)=>{
            cb(null,file.originalname)
        }
    }),

    fileFilter:(req,file,cb)=>{
        const extension = path.extname(file.originalname)
        if( extension !== '.jpg'&&
            extension !== '.png'&&
            extension !== '.jpeg'&&
            extension !== '.webp'
        ){
            cb(null, false)
            return
        }
        cb(null, true)
    }
})

export default upload