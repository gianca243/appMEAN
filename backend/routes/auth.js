//modulos node
const express = require("express")
const router = express.Router()
// modulos internos
const {Usuario} = require("../model/usuario")
//ruta
router.post("/", async(req,res)=>{
  const usuario = await Usuario.findOne({correo:req.body.correo})
  if(!usuario){
    return res.status(400).send("Correo o contraseña no son validos")
  }
  if(usuario.pass !== req.body.pass){
    return res.status(400).send("Correo o contraseña no son validos")
  }
  //Generamos JWT
  const jwtToken = usuario.generateJWT()
  res.status(200).send({jwtToken})
})
module.exports = router