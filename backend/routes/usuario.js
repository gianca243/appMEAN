const express = require("express")
const router = express.Router()
//modulos creados
const { usuario, Usuario } = require('../model/usuario')
//ruta
router.post("/", async (req,res)=>{
  let usuario = await Usuario.findOne({correo: req.body.correo})
  if(usuario) return res.status(400).send("El usuario ya existe en DB")
  usuario = new Usuario({
    nombre:req.body.nombre,
    cedula:req.body.cedula,
    edad:req.body.edad,
    correo:req.body.correo,
    pass:req.body.pass,
  })
  //guardar el usuario en DB
  const result = await usuario.save()
  const jwtToken = usuario.generateJWT()
  res.status(200).send({jwtToken})
})
module.exports = router