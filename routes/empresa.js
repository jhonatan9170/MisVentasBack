const express = require('express');
const router = express.Router();
const config = require('../db/ventas')
var sql = require("mssql");


router.post('/api/empresa',(req,res)=>{

    const {usuario,contrasena,apellidos,nombres,nombreCompleto,telFijo,celular,dni,razonSocial,nombreComercial,direccion,RUC} = req.body;
    sql.connect(config).then(pool => pool.request()
    .input('usuario', sql.VarChar(20), usuario)
    .input('contrasena', sql.VarChar(20), contrasena)
    .input('apellidos', sql.VarChar(50), apellidos)
    .input('nombres', sql.VarChar(50), nombres)
    .input('nombreCompleto', sql.VarChar(100), nombreCompleto)
    .input('telFijo', sql.VarChar(12), telFijo)
    .input('celular', sql.VarChar(15), celular)
    .input('dni', sql.Char(8), dni)
    .input('razonSocial', sql.VarChar(100), razonSocial)
    .input('nombreComercial', sql.VarChar(50), nombreComercial)
    .input('direccion', sql.VarChar(100), direccion)
    .input('RUC', sql.Char(11), RUC)
    .execute('PR_CREAR_EMPRESA'))
    .then(result => {
        res.json("datos Almacenados")
    }).catch(err => {

    })

})
module.exports = router;