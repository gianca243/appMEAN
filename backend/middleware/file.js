//
const { Error } = require('mongoose')
const multer = require('multer')
//Dir de guardar
const directorio = "./public/"
const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    // ya tiene un catch para os errores
    cb(null,directorio)

  },
  filename:(req,file,cb)=>{
    const filename = Date.now() + "-" + file.originalname.toLocaleLowerCase().split(" ").join("-")
    cb(null,filename)
  }
})
const cargarArchivo = multer({
  storage: storage,
  fileFilter:(req,file,cb)=>{
    if (file.mimetype=="image/png" || file.mimetype=="image/jpg" || file.mimetype=="image/jpeg" || file.mimetype=="image/gif") {
      cb(null,true)
    } else {
      cb(null,false)
      return cb(new Error("solo aceptamos : png, jpeg, jpg, gif"))
    }
  }
})
module.exports = cargarArchivo