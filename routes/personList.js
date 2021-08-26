const express = require('express');
const router = express.Router();
const config = require('../db/ventas')
var sql = require("mssql");




router.get('/api/personList', function (req, res) {
    const tipoListado = req.query.tipoListado;
    const nombre = req.query.nombre;
    const idEmpresa=req.query.idEmpresa

    sql.connect(config).then(pool => pool.request()
    .input('tipoListado', sql.VarChar(20), tipoListado)
    .input('nombre', sql.VarChar(30),nombre )
    .input('idEmpresa',sql.Int,idEmpresa)
    .execute('PR_LISTAR_PERSONAS'))
    .then(result => {
        res.json(result.recordset)
    }).catch(err => {
    })
});

router.post('/api/personList', function (req, res) {
    const {condicion,apellidos,nombres,nombreCompleto,tipoPersona,razonSocial,nombreComercial,telFijo,celular,dni,ruc,usuario,idEmpresa }= req.body;
    sql.connect(config).then(pool => pool.request()
    .input('condicion', sql.VarChar(10), condicion)
    .input('apellidos', sql.VarChar(50), apellidos)
    .input('nombres', sql.VarChar(50), nombres)
    .input('nombreCompleto', sql.VarChar(70), nombreCompleto)
    .input('tipoPersona', sql.Char(1), tipoPersona)
    .input('razonSocial', sql.VarChar(50), razonSocial)
    .input('nombreComercial', sql.VarChar(50), nombreComercial)
    .input('telFijo', sql.VarChar(12), telFijo)
    .input('celular', sql.VarChar(15), celular)
    .input('dni', sql.VarChar, dni)
    .input('ruc', sql.Char(11), ruc)
    .input('usuario', sql.VarChar(20), usuario)
    .input('idEmpresa',sql.Int,idEmpresa)
    .execute('PR_CREAR_PERSONA'))
    .then(result => {
        res.send('datos correctamente almacenados');
    }).catch(err => {
    })
});

router.delete('/api/personList', function (req, res) {
    const {idPersona,estado,usuario,idEmpresa} = req.body;
    
    sql.connect(config).then(pool => pool.request()
    .input('idPersona', sql.Int, idPersona)
    .input('estado', sql.Char(1), estado)
    .input('usuario', sql.VarChar(20), usuario)
    .input('idEmpresa',sql.Int,idEmpresa)
    .execute('PR_ELIMINAR_PERSONAS'))
    .then(result => {
        res.json(result.recordset)
    }).catch(err => {
    })
});






module.exports = router;
