const express = require('express');
const router = express.Router();
const config = require('../db/ventas')
var sql = require("mssql");
const jwt = require("jsonwebtoken")

router.get('/api/checkUser', function (req, res) {
    const usuario = req.query.usuario;

    sql.connect(config).then(pool => pool.request()
    .input('usuario', sql.VarChar(20), usuario)
    .execute('PR_LISTAR_USUARIOS'))
    .then(result => {
        res.json(result.recordset.length)
    }).catch(err => {
    })
});
router.get('/api/checkRuc', function (req, res) {
    const ruc = req.query.ruc;

    sql.connect(config).then(pool => pool.request()
    .input('ruc', sql.Int, ruc)
    .execute('PR_CHECK_RUC'))
    .then(result => {
        res.json(result.recordset.length)
    }).catch(err => {
    })
});
router.post('/api/checkLogin',(req,res)=>{

    const {usuario,password} = req.body;

    sql.connect(config).then(pool => pool.request()
    .input('usuario', sql.VarChar(20), usuario)
    .input('password', sql.VarChar(20), password)
    .execute('PR_CHECK_USER'))
    .then(result => {
        if(result.recordset.length==0){
            res.json(0)
        }else{
            const token = jwt.sign({usuario},'my_key')
            let data ={ ...result.recordset[0],token : token}
             res.json(data);
        }
       // res.json(result.recordset)
    }).catch(err => {

    })

})
module.exports = router;