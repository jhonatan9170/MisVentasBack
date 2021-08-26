const express = require('express');
const router = express.Router();
const config = require('../db/ventas')
var sql = require("mssql");

router.get('/api/ventas', function (req, res) {
    const idEmpresa = req.query.idEmpresa
    sql.connect(config).then(pool => pool.request()
    .input('idEmpresa',sql.Int,idEmpresa)
    .execute('PR_LISTAR_VENTAS'))
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
router.post('/api/ventas',(req,res)=>{
    const {tipoDocumento,idCliente,subTotal,descuentos,montoTotal,pago,vuelto,usuario,jsonCompras,idEmpresa} = req.body;
    sql.connect(config).then(pool => pool.request()
    .input('tipoDocumento', sql.Int, tipoDocumento)
    .input('idCliente', sql.Int, idCliente)
    .input('subTotal', sql.Float, subTotal)
    .input('descuentos', sql.Float, descuentos)
    .input('montoTotal', sql.Float, montoTotal)
    .input('pago', sql.Float, pago)
    .input('vuelto', sql.Float, vuelto)
    .input('usuario', sql.VarChar(20), usuario)
    .input('jsonCompras', sql.VarChar(1000), jsonCompras)
    .input('idEmpresa',sql.Int,idEmpresa)
    .execute('PR_CREAR_VENTA'))
    .then(result => {

        res.send('datos correctamente almacenados');
    }).catch(err => {
    })

})
router.delete('/api/ventas', function (req, res) {
    const {idVenta,estado,usuario,idEmpresa} = req.body;
    sql.connect(config).then(pool => pool.request()
    .input('idVenta', sql.Int, idVenta)
    .input('estado', sql.Char(1), estado)
    .input('idEmpresa',sql.Int,idEmpresa)
    .input('usuario', sql.VarChar(20), usuario)
    .execute('PR_ELIMINAR_VENTA'))
    .then(result => {
        res.json(result.recordset)
    }).catch(err => {
    })
});


function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
}
module.exports = router;
