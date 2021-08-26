const express = require('express');
const router = express.Router();
const config = require('../db/ventas')
var sql = require("mssql");

router.get('/api/productList', function (req, res) {
    const tipoListado = req.query.tipoListado;
    const nombre = req.query.nombre;
    const idEmpresa =req.query.idEmpresa;

    sql.connect(config).then(pool => pool.request()
    .input('tipoListado', sql.VarChar(1), tipoListado)
    .input('nombre', sql.VarChar(15),nombre )
    .input('idEmpresa',sql.Int,idEmpresa)
    .execute('PR_LISTAR_PRODUCTOS'))
    .then(result => {
        res.json(result.recordset)
    }).catch(err => {
    })
});

router.post('/api/productList',(req,res)=>{
    const {nombre,descripcion,marca,modelo,stock,stockMinimo,barCode,precioCosto,precioVenta,urlImage,usuario,idEmpresa} = req.body;
    sql.connect(config).then(pool => pool.request()
    .input('nombre', sql.VarChar(20), nombre)
    .input('descripcion', sql.VarChar(100), descripcion)
    .input('marca',  sql.VarChar(20), marca)
    .input('modelo',  sql.VarChar(20), modelo)
    .input('stock', sql.Int, stock)
    .input('stockMinimo', sql.Int, stockMinimo)
    .input('barCode', sql.Int, barCode)
    .input('precioCosto', sql.Float, precioCosto)
    .input('precioVenta', sql.Float, precioVenta)
    .input('urlImage', sql.VarChar(100), urlImage)
    .input('usuario', sql.VarChar(20), usuario)
    .input('idEmpresa',sql.Int,idEmpresa)
    .execute('PR_CREAR_PRODUCTO'))
    .then(result => {
        res.send('datos correctamente almacenados');
    }).catch(err => {
    })

})


router.delete('/api/productList', function (req, res) {
    const {idProducto,estado,usuario,idEmpresa} = req.body;
    
    sql.connect(config).then(pool => pool.request()
    .input('idProducto', sql.Int, idProducto)
    .input('estado', sql.Char(1), estado)
    .input('usuario', sql.VarChar(20), usuario)
    .input('idEmpresa',sql.Int,idEmpresa)
    .execute('PR_ELIMINAR_PRODUCTO'))
    .then(result => {
        res.send("datos correctamente almacenados")
    }).catch(err => {
    })
});

module.exports = router;
