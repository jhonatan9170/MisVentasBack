const express = require('express');
const router = express.Router();
const config = require('../db/ventas')
var sql = require("mssql");

router.get('/api/compras', function (req, res) {
    const idEmpresa = req.query.idEmpresa
    sql.connect(config).then(pool => pool.request()
    .input('idEmpresa',sql.Int,idEmpresa)
    .execute('PR_LISTAR_COMPRAS'))
    .then(result => {
        let  data = result.recordset;
        let data1 = data.map(x=>{
            var date1 = new Date(x.fechaCreacion) ;
            const date = new Date (date1.getTime()-1000*60*60*5) ;
            x.date = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" " +date.getHours()+":"+date.getMinutes();
           return x;
        });
        res.json(result.recordset)
    }).catch(err => {
    })
});
router.post('/api/compra',(req,res)=>{

    const {documentoRef,idProveedor,montoTotal,usuario,jsonCompras,idEmpresa} =  req.body;
    sql.connect(config).then(pool => pool.request()
    .input('documentoRef', sql.VarChar(40), documentoRef)
    .input('idProveedor', sql.Int, idProveedor)
    .input('montoTotal', sql.Float, montoTotal)
    .input('usuario', sql.VarChar(20), usuario)
    .input('jsonCompras', sql.VarChar(1000), jsonCompras)
    .input('idEmpresa',sql.Int,idEmpresa)
    .execute('PR_CREAR_COMPRA'))
    .then(result => {
        res.send('datos correctamente almacenados');
    }).catch(err => {
    })

})
router.delete('/api/compra', function (req, res) {
    const {idCompra,estado,usuario,idEmpresa} = req.body;
    sql.connect(config).then(pool => pool.request()
    .input('idCompra', sql.Int, idCompra)
    .input('estado', sql.Char(1), estado)
    .input('idEmpresa',sql.Int,idEmpresa)
    .input('usuario', sql.VarChar(20), usuario)
    .execute('PR_ELIMINAR_COMPRA'))
    .then(result => {
        res.json(result.recordset)
    }).catch(err => {
    })
});


function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
}
module.exports = router;
