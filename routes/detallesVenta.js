const express = require('express');
const router = express.Router();
const config = require('../db/ventas')
var sql = require("mssql");



router.get('/api/detallesVenta', function (req, res) {
    const idVenta = req.query.idVenta;
    sql.connect(config).then(pool => pool.request()
    .input('idVenta', sql.Int, idVenta)
    .execute('PR_LISTAR_DETALLEVENTAS_BY_ID'))
    .then(result => {
        res.json(result.recordset)
    }).catch(err => {
    })
});


module.exports = router;
