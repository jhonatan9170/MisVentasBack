const express = require('express');
const router = express.Router();
const config = require('../db/ventas')
var sql = require("mssql");



router.get('/api/detallesCompra', function (req, res) {
    const idCompra = req.query.idCompra;
    sql.connect(config).then(pool => pool.request()
    .input('idCompra', sql.Int, idCompra)
    .execute('PR_LISTAR_DETALLECOMPRAS_BY_ID'))
    .then(result => {
        res.json(result.recordset)
    }).catch(err => {
    })
});


module.exports = router;
