//modulos internos
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
//esquema
const esquemaUsuario = new mongoose.Schema({
  nombre:{
    type : String,
  },
  cedula:{
    type : String,
  },
  edad:{
    type : Number,
  },
  correo:{
    type : String,
  },
  pass:{
    type : String,
  },
  fechaRegistro:{
    type : Date,
    default : Date.now
  }
})
//generamos JWT
esquemaUsuario.methods.generateJWT = function(){
  return jwt.sign({
    _id:this._id,
    nombre:this.nombre,
    correo:this.correo
  },"clave")
}
//crear los exports
const Usuario = mongoose.model("usuario", esquemaUsuario)
module.exports.Usuario = Usuario
module.exports.esquemaUsuario = esquemaUsuario